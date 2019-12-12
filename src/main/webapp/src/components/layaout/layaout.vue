//Layout.vue
<template>
  <div>
    <header></header>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'layout',

  }
</script>
