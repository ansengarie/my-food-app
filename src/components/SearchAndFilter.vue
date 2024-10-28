<template>
    <div
        class="flex flex-col w-full space-y-4 md:flex-row md:space-y-0 md:space-x-5"
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
        <!-- <button type="submit" class="flex flex-row items-center px-5 py-2 space-x-4 bg-white rounded-full text-slate-400">
            <font-awesome-icon :icon="['fas', 'sliders']" class="text-slate-400" />
            <span>Filter</span>
        </button> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: "",
        };
    },
    methods: {
        handleSearch() {
            // Emit event dengan nilai pencarian
            this.$emit("search", this.searchQuery);
        },
    },
};
</script>
