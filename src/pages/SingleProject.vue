<template>
    <div>
        <h2>{{ project.title }}</h2>
        <img :src="`${store.imgPath}${project.image}`" :alt="project.title">
    </div>
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
            //console.log(this.$route);
            axios.get(this.store.apiUrl + "projects/" + this.$route.params.slug).then((res) => {
                //console.log(res.data);
                this.project = res.data.results
                console.log(this.project)
                //if (res.data.results) {
                //   this.project = res.data.results

                //} else {

                //this.$router.push({ name: 'not-found' })
                //}   

            })
        }
    },
    created() {
        this.getProjectData();
    }

}
</script>

<style lang="scss" scoped></style>

