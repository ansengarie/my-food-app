<template>
    <section class="flex flex-row w-full overflow-hidden bg-secondary">
        <!-- Left Sidebar -->
        <MenuSidebar />

        <div class="flex-1 ml-[6%] mr-[23%] overflow-y-scroll bg-slate-200">
            <div class="flex flex-col px-10 py-10 space-y-10 min-h-[1500px]">
                <!-- Search and Filter -->
                <SearchAndFilter @search="handleSearch" />

                <!-- Promotional Banner -->
                <PromotionalBanner />

                <!-- Restaurant Section -->
                <div>
                    <h1 class="text-3xl font-bold">Restaurant</h1>
                    <p class="font-medium">
                        Select category you'd like to eat from
                    </p>
                </div>

                <!-- Sort and Restaurant List -->
                <SortAndRestaurantList ref="restaurantList" />
            </div>
        </div>

        <!-- Right Sidebar -->
        <OrderSummary />
    </section>
</template>

<script>
import MenuSidebar from "../components/MenuSidebar.vue";
import SearchAndFilter from "../components/SearchAndFilter.vue";
import PromotionalBanner from "../components/PromotionalBanner.vue";
import CategoryButtons from "../components/CategoryButtons.vue";
import SortAndRestaurantList from "../components/SortAndRestaurantList.vue";
import OrderSummary from "../components/OrderSummary.vue";

export default {
    components: {
        MenuSidebar,
        SearchAndFilter,
        PromotionalBanner,
        CategoryButtons,
        SortAndRestaurantList,
        OrderSummary,
    },
    methods: {
        handleSearch(query) {
            // Teruskan query pencarian ke komponen SortAndRestaurantList
            this.$refs.restaurantList.updateSearch(query);
        }
    }
};
</script>
