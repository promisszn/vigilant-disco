<template>
    <main-header />
    <router-view />
    <main-footer />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
    components: {
        MainHeader,
        MainFooter,
    },
};
</script>

<style>
@import "assets/css/main.css";
</style>
