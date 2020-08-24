<template>
  <div>
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      title: String,
      description: String
  }
}
</script>

<style lang="scss" scoped>
.container {
    text-align: center;
}

.title {
    font-size: 24px;
    font-weight: bold;
}

.description {
    font-size: 16px;
    margin-top: 10px;
}
</style>