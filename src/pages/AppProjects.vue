<template>
    <div>
        <h1>
            List Projects
        </h1>
        <ul>
            <li v-for="project in projects" :key="project.id">

                {{ project.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import { store } from "../store.js";
export default {
    name: 'AppProjects',
    data() {

        return {
            store
        }
    },
    methods: {
        getAllProjects() {
            axios.get(`${this.store.apiUrl}/projects`).then((res) => {
                console.log(res.data);
                this.projects = res.data.results.data;
                console.log(this.projects);

            }).catch((err) => {

            });

        },
    },
    created() {
        this.getAllProjects();
    }



}
</script>

<style lang="scss" scoped></style>
{}