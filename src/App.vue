<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/modules/Header.vue";

export default {
  components: {
    Header,
  }
};

</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";

</style>