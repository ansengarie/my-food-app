<template>
    <div class="space-y-3 md:space-y-5">
        <div class="cursor-pointer" @click="showFoodDetail">
            <div class="relative bg-white rounded-2xl md:rounded-3xl">
                <div
                    class="absolute inset-x-0 top-0 flex flex-row justify-between px-5 py-2 rounded-t-3xl bg-white/75"
                >
                    <strong>{{ restaurant.distance }}</strong>
                    <strong>{{ restaurant.time }}</strong>
                </div>
                <img
                    :src="restaurant.image"
                    alt=""
                    class="object-cover w-full aspect-square rounded-3xl"
                />
            </div>
            <div>
                <div class="flex flex-row justify-between text-sm md:text-base">
                    <h1 class="font-bold">{{ restaurant.name }}</h1>
                    <strong>{{ restaurant.price }}</strong>
                </div>
                <div class="flex flex-row justify-between text-xs md:text-sm">
                    <p>{{ restaurant.category }}</p>
                    <div class="flex flex-row items-center space-x-1">
                        <strong>{{ restaurant.feedback }}</strong>
                        <font-awesome-icon icon="star" class="text-warning" />
                        <span>({{ restaurant.reviews }} reviews)</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add Food Detail Modal -->
        <FoodDetailModal
            :show="isModalOpen"
            :food="restaurant"
            @close="closeModal"
            @add-to-order="handleAddToOrder"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import FoodDetailModal from "./FoodDetailModal.vue";

const props = defineProps({
    restaurant: {
        type: Object,
        required: true,
    },
});

const store = useStore();
const isModalOpen = ref(false);

const showFoodDetail = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const handleAddToOrder = (orderItem) => {
    store.dispatch("addToOrder", orderItem);
    closeModal();
};
</script>
