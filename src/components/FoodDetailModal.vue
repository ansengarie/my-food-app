<template>
    <div
        v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center"
    >
        <!-- Overlay -->
        <div
            class="absolute inset-0 -mt-6 bg-black/50"
            @click.self="closeModal"
        ></div>

        <!-- Modal Content -->
        <div class="relative z-50 w-1/3 p-8 bg-white rounded-xl">
            <button
                @click.stop="closeModal"
                class="absolute top-0 p-2 text-gray-500 right-1 hover:text-gray-700"
            >
                <font-awesome-icon :icon="['fas', 'xmark']" />
            </button>

            <div class="space-y-4">
                <!-- Food Image -->
                <img
                    :src="food.image"
                    :alt="food.name"
                    class="object-cover w-full rounded-lg aspect-video"
                />

                <!-- Food Info -->
                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <h2 class="text-xl font-bold">{{ food.name }}</h2>
                        <p class="text-xl font-bold text-primary">
                            {{ food.price }}
                        </p>
                    </div>
                    <p class="text-gray-600">{{ food.description }}</p>
                </div>

                <!-- Quantity Selector -->
                <div
                    class="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                    <span class="font-medium">Quantity:</span>
                    <div class="flex items-center space-x-4">
                        <button
                            @click="decreaseQuantity"
                            class="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                            :disabled="quantity <= 1"
                        >
                            <font-awesome-icon :icon="['fas', 'minus']" />
                        </button>
                        <span class="text-xl font-bold">{{ quantity }}</span>
                        <button
                            @click="increaseQuantity"
                            class="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                            <font-awesome-icon :icon="['fas', 'plus']" />
                        </button>
                    </div>
                </div>

                <!-- Add to Order Button -->
                <button
                    @click="addToOrder"
                    class="w-full py-3 text-white rounded-xl bg-primary hover:bg-primary/90"
                >
                    Add to Order
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: Boolean,
        food: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            quantity: 1,
        };
    },
    methods: {
        closeModal() {
            this.quantity = 1; // Reset quantity when closing
            this.$emit("close"); // Emit close event
        },
        increaseQuantity() {
            this.quantity++;
        },
        decreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },
        addToOrder() {
            const orderItem = {
                id: this.food.id, // Pastikan ada id di food
                name: this.food.name,
                image: this.food.image,
                price: this.food.price,
                quantity: this.quantity,
                totalPrice:
                    parseFloat(this.food.price.replace("$", "")) *
                    this.quantity,
            };
            this.$emit("add-to-order", orderItem); // Emit add-to-order event
            this.closeModal(); // Close modal after adding
        },
    },
};
</script>
