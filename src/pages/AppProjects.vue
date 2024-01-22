<template>
    <div>
        <h1>
            List Projects
        </h1>
        <ul>
            <li v-for="project in store.projects" :key="project.id">

                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-primary">
                    {{ project.title }}
                </router-link>
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
                this.store.projects = res.data.results.data;
                console.log(this.store.projects);

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