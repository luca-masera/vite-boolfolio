<template>
    <div class="card">
        <img :src="`${store.imgPath}${project.image}`" class="card-img-top" :alt="project.title">
        <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-primary">
            {{ project.title }}
        </router-link>

    </div>
</template>
    

<script>
import { store } from "../store.js";
export default {
    name: 'AppCard',
    props: ['project'],

    data() {

        return {
            store
        }
    },

}
</script>

<style lang="scss" scoped></style>


