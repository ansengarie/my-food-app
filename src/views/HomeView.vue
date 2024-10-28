<template>
    <section
        class="flex flex-col w-full overflow-hidden md:flex-row bg-secondary"
    >
        <!-- Left Sidebar -->
        <MenuSidebar
            :class="{
                'translate-x-0': isLeftSidebarOpen,
                '-translate-x-full': !isLeftSidebarOpen,
                'md:translate-x-0': true,
            }"
            class="fixed left-0 top-0 h-full w-64 md:w-[6%] transition-transform duration-300 ease-in-out z-40"
        />

        <div
            class="flex-1 w-full md:ml-[6%] md:mr-[23%] overflow-y-scroll bg-slate-200"
        >
            <div
                class="flex flex-col px-4 md:px-10 py-6 md:py-10 space-y-6 md:space-y-10 min-h-[1500px]"
            >
                <div class="flex flex-row md:space-x-0 space-x-7">
                    <!-- Hamburger button for mobile -->
                    <button
                        @click="toggleLeftSidebar"
                        class="z-50 top-8 left-4 md:hidden"
                    >
                        <font-awesome-icon icon="bars" />
                    </button>
                    <!-- Search and Filter -->
                    <SearchAndFilter @search="handleSearch" />
                </div>

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

        <!-- Order Summary toggle button -->
        <button
            @click="toggleRightSidebar"
            class="fixed z-50 p-2 text-white rounded-full bottom-4 right-4 md:hidden bg-primary"
        >
            <font-awesome-icon icon="chevron-up" />
        </button>

        <!-- Right Sidebar -->
        <OrderSummary
            :class="{
                'translate-y-0': isRightSidebarOpen,
                'translate-y-full': !isRightSidebarOpen,
                'md:translate-y-0': true,
            }"
            class="fixed bottom-0 left-0 w-full md:w-[25%] md:right-0 md:left-auto md:top-0 transition-transform duration-300 ease-in-out z-30"
        />
        <!-- Loading Spinner -->
        <div
            v-if="loading"
            class="fixed top-0 left-0 z-[100] flex items-center justify-center w-full h-full space-x-4 md:h-screen bg-black/50"
        >
            <font-awesome-icon
                :icon="['fas', 'spinner']"
                class="text-4xl text-primary animate-spin"
            />
            <p class="text-2xl font-bold text-white">
                Processing your order...
            </p>
        </div>

        <!-- Notification Modal -->
        <div
            v-if="showNotification"
            class="fixed top-0 left-0 z-[100] flex items-center justify-center w-full h-full md:h-screen bg-black/50"
        >
            <div class="p-8 bg-white rounded-lg shadow-xl md:p-10">
                <h1 class="text-2xl font-bold text-primary">
                    Order Successful!
                </h1>
                <p class="text-lg">
                    Your order has been successfully submitted.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
import MenuSidebar from "../components/MenuSidebar.vue";
import SearchAndFilter from "../components/SearchAndFilter.vue";
import PromotionalBanner from "../components/PromotionalBanner.vue";
import CategoryButtons from "../components/CategoryButtons.vue";
import SortAndRestaurantList from "../components/SortAndRestaurantList.vue";
import OrderSummary from "../components/OrderSummary.vue";
import { inject } from "vue";
import { mapState } from "vuex";

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
            this.$refs.restaurantList.updateSearch(query);
        },
    },
    computed: {
        ...mapState(["loading", "showNotification"]),
    },
    setup() {
        const isLeftSidebarOpen = inject("isLeftSidebarOpen");
        const isRightSidebarOpen = inject("isRightSidebarOpen");

        const toggleLeftSidebar = () => {
            isLeftSidebarOpen.value = !isLeftSidebarOpen.value;
        };

        const toggleRightSidebar = () => {
            isRightSidebarOpen.value = !isRightSidebarOpen.value;
        };

        return {
            isLeftSidebarOpen,
            isRightSidebarOpen,
            toggleLeftSidebar,
            toggleRightSidebar,
        };
    },
};
</script>
