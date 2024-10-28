<template>
    <div
        class="flex flex-row items-center pb-4 space-x-2 overflow-x-auto md:overflow-x-visible md:pb-0"
    >
        <div class="flex flex-row space-x-3 md:space-x-5">
            <CategoryButton
                icon="dice"
                label="Surprise me!"
                :isActive="selectedCategory === 'all'"
                @click="selectCategory('all')"
            />
            <CategoryButton
                icon="cookie"
                label="Dessert"
                :isActive="selectedCategory === 'Dessert'"
                @click="selectCategory('Dessert')"
            />
            <CategoryButton
                icon="pizza-slice"
                label="Italian Food"
                :isActive="selectedCategory === 'Italian Food'"
                @click="selectCategory('Italian Food')"
            />
            <CategoryButton
                icon="burger"
                label="Fast Food"
                :isActive="selectedCategory === 'Fast Food'"
                @click="selectCategory('Fast Food')"
            />
            <CategoryButton
                icon="bowl-rice"
                label="Asian Food"
                :isActive="selectedCategory === 'Asian Food'"
                @click="selectCategory('Asian Food')"
            />
            <CategoryButton
                icon="drumstick-bite"
                label="Barbeque"
                :isActive="selectedCategory === 'Barbeque'"
                @click="selectCategory('Barbeque')"
            />
        </div>
        <font-awesome-icon
            :icon="['fas', 'chevron-right']"
            class="text-slate-400"
        />
    </div>
</template>

<script>
import CategoryButton from "./CategoryButton.vue";

export default {
    components: {
        CategoryButton,
    },
    data() {
        return {
            selectedCategory: "all", // Store currently selected category
        };
    },
    methods: {
        selectCategory(category) {
            this.selectedCategory = category; // Update selected category
            this.$emit("category-selected", category); // Emit event with selected category
        },
    },
};
</script>
