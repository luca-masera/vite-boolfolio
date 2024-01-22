<template>
  <router-view></router-view>
</template>

<script>
import axios from "axios";
import { store } from "./data/store.js";

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

    getApiTest() {
      axios.get(this.store.apiUrl + "/projects").then((res) => {
        console.log(res.data);
        //this.projects = res.data.results.data;
        //console.log(this.projects)
      });
    },
  },

  mounted() {
    this.getApiTest();
  },
};
</script>
<style lang="scss" scoped>
@use "../assets/styles/partials/variables.scss" as *;

h1 {
  color: $font-color;
}
</style>
