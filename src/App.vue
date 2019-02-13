<template>
  <div id="app">
    <navigation></navigation>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/navigation/Navigation.vue";
import Footer from "./components/navigation/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
    Navigation
  },
  created() {
    // When the application is created, we are pushing the homepage to the cocktail name search page
    this.$router.push({ path: "/name" });
  }
};
</script>


<style lang="scss">
@import "./styles/bootstrap.css";
@import "./styles/custom.css";

html,
body {
  height: 100%;
  position: relative;
}
</style>
