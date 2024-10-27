<template>
    <div class="flex flex-col space-y-2">
        <!-- Sort Dropdown -->
        <div class="relative inline-block">
            <!-- Ubah ke inline-block -->
            <button
                @click.stop="toggleSortMenu"
                class="flex flex-row items-center p-2 space-x-2 rounded-lg "
            >
                <span
                    >Sort by:
                    <strong>{{ sortLabels[currentSort] }}</strong></span
                >
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
            </button>

            <!-- Dropdown Menu -->
            <div
                v-show="showSortMenu"
                class="absolute z-50 w-48 py-2 mt-2 bg-white rounded-lg shadow-lg"
            >
                <button
                    v-for="(label, sort) in sortLabels"
                    :key="sort"
                    @click="selectSort(sort)"
                    class="w-full px-4 py-2 text-left hover:bg-slate-100"
                    :class="{ 'bg-slate-50': currentSort === sort }"
                >
                    {{ label }}
                </button>
            </div>
        </div>

        <!-- Restaurant Grid -->
        <div class="grid grid-flow-row grid-cols-3 gap-10">
            <RestaurantCard
                v-for="restaurant in sortedRestaurants"
                :key="restaurant.name"
                :restaurant="restaurant"
            />
        </div>
    </div>
</template>

<script>
import RestaurantCard from "./RestaurantCard.vue";
import restaurantsData from "../data/restaurant.json";
import CategoryButtons from "./CategoryButtons.vue";

export default {
    components: {
        RestaurantCard,
        CategoryButtons,
    },
    data() {
        return {
            restaurants: restaurantsData,
            selectedCategory: "all",
            showSortMenu: false,
            currentSort: "reviews",
            sortLabels: {
                reviews: "Reviews",
                priceLow: "Lowest Price",
                priceHigh: "Highest Price",
                distanceNear: "Nearest Distance",
                distanceFar: "Farthest Distance",
            },
        };
    },
    computed: {
        filteredRestaurants() {
            if (this.selectedCategory === "all") {
                return this.restaurants;
            }
            return this.restaurants.filter(
                (restaurant) => restaurant.category === this.selectedCategory
            );
        },
        sortedRestaurants() {
            const restaurants = [...this.filteredRestaurants];

            switch (this.currentSort) {
                case "reviews":
                    return restaurants.sort((a, b) => b.reviews - a.reviews);

                case "priceLow":
                    return restaurants.sort((a, b) => {
                        const priceA = Number(a.price.replace("$", ""));
                        const priceB = Number(b.price.replace("$", ""));
                        return priceA - priceB;
                    });

                case "priceHigh":
                    return restaurants.sort((a, b) => {
                        const priceA = Number(a.price.replace("$", ""));
                        const priceB = Number(b.price.replace("$", ""));
                        return priceB - priceA;
                    });

                case "distanceNear":
                    return restaurants.sort((a, b) => {
                        const distA = Number(a.distance.split(" ")[0]);
                        const distB = Number(b.distance.split(" ")[0]);
                        return distA - distB;
                    });

                case "distanceFar":
                    return restaurants.sort((a, b) => {
                        const distA = Number(a.distance.split(" ")[0]);
                        const distB = Number(b.distance.split(" ")[0]);
                        return distB - distA;
                    });

                default:
                    return restaurants;
            }
        },
    },
    methods: {
        selectCategory(category) {
            this.selectedCategory = category;
        },
        toggleSortMenu() {
            this.showSortMenu = !this.showSortMenu;
        },
        selectSort(sort) {
            this.currentSort = sort;
            this.showSortMenu = false;
        },
        closeDropdown(e) {
            // Jika klik di luar dropdown, tutup dropdown
            if (!this.$el.contains(e.target)) {
                this.showSortMenu = false;
            }
        },
    },
    mounted() {
        // Tambahkan event listener untuk menutup dropdown saat klik di luar
        document.addEventListener("click", this.closeDropdown);
    },
    beforeUnmount() {
        // Hapus event listener saat komponen dihancurkan
        document.removeEventListener("click", this.closeDropdown);
    },
};
</script>

<style scoped>
.absolute {
    transition: all 0.2s ease-in-out;
}
</style>
