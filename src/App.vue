<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
  import Navigation from './components/navigation/Navigation.vue';

  export default {
    name: 'App',
    components: {
      Navigation
    }
  }
</script>


<style lang="scss">

</style>
