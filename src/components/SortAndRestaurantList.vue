<template>
    <CategoryButtons
        @category-selected="selectCategory"
        :selectedCategory="selectedCategory"
    />
    <div class="flex flex-col space-y-2">
        <p class="flex flex-row items-center space-x-2">
            <span>Sort by: <strong>Feedbacks</strong></span>
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </p>
        <div class="grid grid-flow-row grid-cols-3 gap-10">
            <RestaurantCard
                v-for="restaurant in filteredRestaurants"
                :key="restaurant.name"
                :restaurant="restaurant"
            />
        </div>
    </div>
</template>

<script>
import RestaurantCard from "./RestaurantCard.vue";
import restaurantsData from "../data/restaurant.json"; // Import data JSON
import CategoryButtons from "./CategoryButtons.vue"; // Import CategoryButtons

export default {
    components: {
        RestaurantCard,
        CategoryButtons,
    },
    data() {
        return {
            restaurants: restaurantsData, // Assign data JSON to state
            selectedCategory: "all", // Untuk menyimpan kategori yang dipilih
        };
    },
    computed: {
        filteredRestaurants() {
            // Return filtered restaurants based on selected category
            if (this.selectedCategory === "all") {
                return this.restaurants;
            }
            return this.restaurants.filter(
                (restaurant) => restaurant.category === this.selectedCategory
            );
        },
    },
    methods: {
        selectCategory(category) {
            this.selectedCategory = category; // Update kategori yang dipilih
        },
    },
};
</script>
