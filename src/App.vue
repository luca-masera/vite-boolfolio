<template>
  <route>
</template>
<script>
import axios from 'axios';
import { store } from "./data/store.js";

export default {
  name: 'App',
  components: {},

  data() {

    return {
      store,
    };
  },
  methods: {

    getApiTest() {
      axios.get(this.store.apiUrl + "projects").then((res) => {
        console.log(res.data);
      });
    },
  },

  mounted() {
    this.getApiTest;
  },
};
</script>
<style lang="scss" scoped>
@use "./assets/styles/partials/variables.scss" as *;
</style>