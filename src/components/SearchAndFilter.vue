<template>
    <div
        class="flex flex-col w-3/4 space-y-4 md:w-full md:flex-row md:space-y-0 md:space-x-5"
    >
        <div class="relative w-full bg-white rounded-full md:w-1/2">
            <font-awesome-icon
                :icon="['fas', 'magnifying-glass']"
                class="absolute top-3 left-3 text-slate-400"
            />
            <input
                v-model="searchQuery"
                type="search"
                name="search"
                id="search"
                class="w-full py-2 pl-10 pr-5 bg-white rounded-full"
                placeholder="Search restaurant or food"
                @input="handleSearch"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");

const emit = defineEmits(["search"]);

const handleSearch = () => {
    emit("search", searchQuery.value);
};
</script>
