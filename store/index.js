import firebase from 'firebase'
import { db } from '~/plugins/firebase.js'

import Janken from '~/assets/janken.js'

const state = () => ({
    user: {
        email: null,
        name: null,
        photoURL: null,
        noAccount: false,
        isLogin: false
    },
    janken: null,
    jankenResult: {
        jugement: '',
        point: 0,
        scores: [],
        judgeCnt: {
            win: 0,
            lose: 0,
            drow: 0
        },
        jankenHand: {
            playerNum: null,
            playerImgURL: null,
            cpNum: null,
            cpImgURL: null
        }
    },
    modal: {
        isOpen: false
    },
    allScores: []
})

const getters = {
    user (state) {
        return state.user
    },
    janken (state) {
        return state.janken
    },
    isLogin (state) {
        return state.user.isLogin
    },
    getJankenResult (state) {
        return state.jankenResult
    },
    getAllScores (state) {
        return state.allScores
    }
}

const mutations = {
    storeUser (state, payload) {
        if(!state.user) return
        state.user.email = payload.email
        state.user.name = payload.name
        state.user.photoURL = payload.photoURL
        state.user.isLogin = true
    },
    deleteUser (state) {
        state.user.email = null
        state.user.name = null
        state.user.photoURL = null
        state.user.noAccount = true
        state.user.isLogin = false
    },
    setJanken (state, janken) {
        state.janken = janken
    },
    deleteJanken (state) {
        state.janken = null
    },
    storeJankenResult (state, hand) {
        const jankenResult = state.janken.result(hand)
        if(!jankenResult.jugement) return
        state.jankenResult = jankenResult
    },
    resetJankenResult (state, scores) {
        state.janken.resetJankenResult()
        state.jankenResult =  {
            jugement: '',
            point: 0,
            scores: scores,
            judgeCnt: {
                win: 0,
                lose: 0,
                drow: 0
            },
            jankenHand: {
                playerNum: null,
                playerImgURL: null,
                cpNum: null,
                cpImgURL: null
            }
        }
    },
    changeModalStatus(state, boolen){
        state.modal.isOpen = boolen
    },
    addScore( state, score ){
        state.jankenResult.scores = state.janken.addScores(score)
    },
    storeAllScore (state, allScores) {
        const _allScores = allScores.sort((a,b) => {
            if(Number(a.score.point) > Number(b.score.point)) return -1
            if(Number(a.score.point) < Number(b.score.point)) return 1
            return 0
        })
        state.allScores = _allScores
    }
}

const actions = {
    signIn ({ dispatch }) {
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        dispatch('AuthStateChanged')
    },
    singOut ({ dispatch }) {
        firebase.auth().signOut()
        dispatch('AuthStateChanged')
    },
    AuthStateChanged ({ dispatch, commit }) {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                let { email, displayName, photoURL} = user
                commit('storeUser', { email: email, name: displayName, photoURL: photoURL })
                dispatch('checkUser')
            } else {
                commit('deleteUser')

            }
        })
    },

    checkUser ({ dispatch, state }) {
        db.collection("users").doc(state.user.email).get().then((doc) =>{
            if (doc.exists) {
            } else {
                dispatch('createUser')
            }
        }).catch((error) =>{
            console.error('error writing firebase document:', error)
        })
    },
    createUser ({ state }) {
        db.collection("users").doc(state.user.email).set({
            name: state.user.name,
            photoURL: state.user.photoURL
        }).then(() =>{
            console.log("Document successfully written!")
        }).catch((error) =>{
            console.error("Error writing document: ", error);
        })
    },
    selectMode ({ commit }, mode) {
        commit('setJanken', new Janken(mode))
    },
    clacJankenResult ({ commit, state }, hand) {
        if(!state.janken.mode) return
        commit('storeJankenResult', hand)
    },
    createScore ({ state }, score) {
        db.collection("scores").doc().set({
            name: state.user.name,
            photoURL: state.user.photoURL,
            score: score
        }).then(() =>{
            console.log("Document successfully written!")
        }).catch((error) =>{
            console.error("Error writing document: ", error);
        })
    },
    getAllScores ({ commit }) {
        console.log('fugafuga')
        db.collection("scores").get().then((querySnapshot) => {
            const allScores = []
            querySnapshot.forEach((doc) => {
                allScores.push(doc.data())
            });
            commit('storeAllScore', allScores)
        });
    }
}

export default {state, getters, mutations, actions}

