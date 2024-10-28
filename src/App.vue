<template>
    <router-view />
</template>

<script setup>
import { ref, provide, onMounted } from "vue";

const isDesktop = ref(window.matchMedia("(min-width: 768px)").matches);
const isLeftSidebarOpen = ref(isDesktop.value);
const isRightSidebarOpen = ref(isDesktop.value);

provide("isLeftSidebarOpen", isLeftSidebarOpen);
provide("isRightSidebarOpen", isRightSidebarOpen);

onMounted(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
        isLeftSidebarOpen.value = e.matches;
        isRightSidebarOpen.value = e.matches;
    });
});
</script>

<style>
@import "./assets/index.css";
</style>
