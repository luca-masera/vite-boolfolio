<template>
    <h2>{{ project.title }}</h2>
</template>

<script>
import axios from 'axios';
import { store } from "../store.js";

export default {
    name: 'SingleProject',

    data() {

        return {
            store,
            project: null
        }
    },
    methods: {

        getProjectData() {
            console.log(this.$route);
            axios.get(`${this.store.apiUrl}/projects/${this.$route.params.slug}`).then((res) => {
                console.log(res.data);
                this.project = res.data.results
            })
        }
    },
    created() {
        this.getProjectData();
    }

}
</script>

<style lang="scss" scoped></style>
