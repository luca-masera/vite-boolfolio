<template>
    <div>
        <main class="container">
            <h1>List Projects</h1>
            <div class="row">
                <div class="col-12 col-md-4 col-lg-3" v-for="project in store.projects" :key="project.id">
                    <AppCard :project="project" />
                </div>
            </div>
            <select name="type" id="type" v-model="selectedType">
                <option value="">All</option>
                <option v-for="type in store.types" :key="type.id" :value="type.id">
                    {{ type.name }}
                </option>
            </select>
            <nav class="d-flex justify-content-center align-items-center my-4">
                <ul class="pagination">
                    <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                        <button class="page-link" :disabled="currentPage === 1"
                            @click="getAllProject(currentPage - 1)">Previous
                        </button>
                    </li>
                    <li class="page-item" v-for="n in lastPage">
                        <button class="page-link" @click="getAllProject(n)">{{ n }}</button>
                    </li>
                    <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
                        <button class="page-link" :disabled="currentPage === lastPage"
                            @click="getAllProject(currentPage + 1)">Next
                        </button>
                    </li>
                </ul>
            </nav>
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
            store,
            currentPage: 1,
            lastPage: null,
            selectedType: ''

        }
    },
    methods: {
        getAllProject(pageNum) {
            axios.get(`${this.store.apiUrl}projects`, { params: { page: pageNum } }).then((res) => {
                console.log(res.data);
                this.store.projects = res.data.results.data;

                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
                this.total = res.data.results.total;


            }).catch((err) => {
                console.log(err)
            });
        },

        projectType() {
            axios.get(`${this.store.apiUrl}types`).then((res) => {
                this.store.types = res.data.results;
            }).catch((err) => {
                console.error(err);
            });
        },
        filterProjects() {
            if (this.selectedType) {
                axios.get(`${this.store.apiUrl}projects`, { params: { type: this.selectedType } }).then((res) => {
                    this.store.projects = res.data.results.data;
                    console.log(res.data)

                }).catch((err) => {
                    console.error(err);
                });

            } else {
                this.getAllProject(this.currentPage);
            }
        }
    },

    created() {
        this.getAllProject(this.currentPage);
        this.projectType();
        this.filterProjects(this.currentPage)
    }
}




</script>

<style lang="scss" scoped></style>
<!--getAllProject(pageNum) {
    axios.get(this.store.apiUrl + "projects", { params: { page: pageNum } }).then((res) => {
        console.log(res.data);
        this.store.projects = res.data.results;
        this.currentPage = res.data.results.current_page;
        this.lastPage = res.data.results.last_page;
        this.total = res.data.results.total;
        console.log(this.store.projects);

    }).catch((err) => {

    });

},
},
created() {
this.getAllProject(this.currentPage);
}-->
