<template>
    <div>
        <h1>
            ciao
        </h1>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from "../store";

export default {
    name: 'AppHome',


    data() {

        return {

        };
    },
    methods: {

        //getApiTest() {
        //  axios.get(this.store.apiUrl + "projects").then((res) => {
        //    console.log(res.data);
        // });
        // },
    },

    mounted() {
        // this.getApiTest;
    },
};
</script>
<style lang="scss" scoped>
@use "../assets/styles/partials/variables.scss" as *;
</style>../store