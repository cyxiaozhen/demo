<template>
  <div id="wrapper">
<!--    <left-page></left-page>-->
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <ul>
      <router-link id="Index" to="/index">Home</router-link>
      <router-link id="FirstPage" to="/FirstPage">FirstPage</router-link>
      <router-link id="SecondPage" to="/SecondPage">SecondPage</router-link>
    </ul>
    <h2>Ecosystem</h2>
  </div>
</template>
<script>
  // import LeftPage from "@/components/layaout/LeftPage"
  import vHead from './common/Header.vue';
  import vSidebar from './common/Sidebar.vue';
  // import vTags from './Tags.vue';
  import bus from './common/bus';
  export default {
    name: 'HelloWorld',
    components: {
      // LeftPage,
      vHead,
      vSidebar,
      // vTags
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
