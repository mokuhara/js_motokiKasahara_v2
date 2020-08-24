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
    janken: {}
})

const getters = {
    user (state) {
        return state.user
    },
    janken (state) {
        return state.janken
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
    }
}

export default {state, getters, mutations, actions}

