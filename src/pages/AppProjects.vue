<template>
    <div>
        <main class="container">
            <h1>List Projects</h1>
            <div class="row">
                <div class="col-12 col-md-4 col-lg-3" v-for="project in store.projects" :key="project.id">
                    <AppCard :project="project" />
                </div>
            </div>
        </main>
    </div>
</template>

<script>

import { store } from "../store.js";
import axios from "axios";
import AppCard from "../components/AppCard.vue";
export default {
    name: 'AppProjects',

    components: {
        AppCard
    },


    data() {

        return {
            store
        }
    },
    methods: {
        getAllProject() {
            axios.get(this.store.apiUrl + "projects").then((res) => {
                console.log(res.data);
                this.store.projects = res.data.results;
                console.log(this.store.projects);

            }).catch((err) => {

            });

        },
    },
    created() {
        this.getAllProject();
    }



}
</script>

<style lang="scss" scoped></style>
{}