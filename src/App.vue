<template>
  <router-view></router-view>
</template>

<script>
import axios from "axios";
import { store } from "./store.js";

export default {
  name: 'App',
  components: {},

  data() {

    return {
      store,
      projects: [],
    };
  },
  methods: {

  },

  mounted() {

  },
};
</script>
<style lang="scss" scoped>
@use "./assets/styles/partials/variables.scss" as *;

h1 {
  color: $font-color;
}
</style>
./store.js