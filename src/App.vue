<template>
  <AppHeader />
  <router-view></router-view>
</template>

<script>
import axios from "axios";
import { store } from "./store.js";
import AppHeader from "./components/AppHeader.vue";


export default {
  name: 'App',


  data() {

    return {
      store
    };
  },

  components: {
    AppHeader
  },

  methods: {

  },

  mounted() {

  },
};
</script>
<style lang="scss" scoped>
@use "./assets/styles/partials/variables.scss" as *;
</style>
