<template>
    <router-view />
</template>

<script>
import { ref, provide } from "vue";

export default {
    name: "App",
    setup() {
        // Gunakan matchMedia untuk mendeteksi viewport
        const isDesktop = window.matchMedia("(min-width: 768px)").matches;

        // Set nilai default berdasarkan viewport
        const isLeftSidebarOpen = ref(isDesktop);
        const isRightSidebarOpen = ref(isDesktop);

        // Provide nilai ke komponen child
        provide("isLeftSidebarOpen", isLeftSidebarOpen);
        provide("isRightSidebarOpen", isRightSidebarOpen);

        // Optional: Listen untuk perubahan viewport
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener("change", (e) => {
                isLeftSidebarOpen.value = e.matches;
                isRightSidebarOpen.value = e.matches;
            });
    },
};
</script>

<style>
@import "./assets/index.css";
</style>
