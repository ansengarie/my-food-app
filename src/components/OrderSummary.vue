<template>
    <div class="bg-white h-[70vh] md:h-screen overflow-hidden">
        <!-- Close button for mobile -->
        <button
            @click="closeRightSidebar"
            class="self-start mt-4 ml-4 md:hidden"
        >
            <font-awesome-icon icon="chevron-down" />
        </button>
        <div
            class="flex flex-col justify-between h-full px-4 py-6 space-y-6 overflow-y-auto md:px-10 md:py-10 md:space-y-20"
        >
            <!-- Order -->
            <div class="space-y-5 divide-y divide-solid">
                <!-- Top -->
                <div class="flex flex-row justify-between space-x-10">
                    <div class="flex flex-row items-center w-2/5 space-x-2">
                        <font-awesome-icon
                            :icon="['fas', 'user']"
                            class="text-primary"
                        />
                        <strong>Aji N</strong>
                    </div>
                    <div class="flex flex-row items-center w-3/5 space-x-2">
                        <font-awesome-icon
                            :icon="['fas', 'location-dot']"
                            class="text-primary"
                        />
                        <strong>West Bandung</strong>
                    </div>
                </div>
                <div class="flex flex-col pt-5 space-y-10">
                    <h1 class="text-xl font-bold">My order</h1>
                    <!-- List order Looping -->
                    <ul class="space-y-5">
                        <li
                            v-for="item in orderItems"
                            :key="item.id"
                            class="flex flex-row justify-between"
                        >
                            <div class="flex flex-row items-center space-x-2">
                                <img
                                    :src="item.image"
                                    :alt="item.name"
                                    class="object-cover h-10 rounded-lg aspect-square"
                                />
                                <div
                                    class="flex flex-row items-center space-x-1"
                                >
                                    <font-awesome-icon
                                        :icon="['fas', 'xmark']"
                                        class="w-2"
                                    />
                                    <span>{{ item.quantity }}</span>
                                </div>
                                <p>{{ item.name }}</p>
                            </div>
                            <div class="flex flex-row items-center space-x-1">
                                <strong class="text-xl"
                                    >${{ item.totalPrice.toFixed(2) }}</strong
                                >
                                <button
                                    @click="removeFromOrder(item.id)"
                                    class="text-red-500"
                                >
                                    <font-awesome-icon
                                        :icon="['fas', 'xmark']"
                                    />
                                </button>
                            </div>
                        </li>
                    </ul>
                    <div class="flex flex-row justify-between">
                        <div>Delivery</div>
                        <strong class="text-xl">$ {{ deliveryFee }}</strong>
                    </div>
                </div>
                <!-- Total -->
                <div class="flex flex-row justify-between pt-5">
                    <strong class="flex flex-row space-x-5 text-xl">
                        <span>Total:</span>
                        <span>${{ totalAmount.toFixed(2) }}</span>
                    </strong>
                </div>
            </div>
            <!-- Submit Order Button -->
            <div class="flex flex-col space-y-4">
                <button
                    @click="submitOrder"
                    class="py-4 text-xl font-bold tracking-widest text-white rounded-xl bg-primary"
                    :disabled="orderItems.length === 0"
                >
                    Submit order
                </button>
                <button
                    class="relative py-4 rounded-xl bg-secondary text-slate-400"
                >
                    <div
                        class="flex flex-row items-center justify-center space-x-4"
                    >
                        <img
                            src="https://cdn.antaranews.com/cache/1200x800/2023/03/02/1-Mastercard-Logo.png"
                            alt=""
                            class="h-10"
                        />
                        <span> 6372 **** **** 1234</span>
                    </div>
                    <small class="absolute text-xs right-3 top-2">Edit</small>
                </button>
            </div>
        </div>
        <!-- Success Notification -->
        <!-- <div
            v-if="showNotification"
            class="fixed inset-x-0 top-0 z-50 p-4 text-white bg-green-500 rounded-b-lg"
        >
            <font-awesome-icon :icon="['fas', 'check-circle']" class="w-4" />
            <span class="ml-2">Order submitted successfully!</span>
        </div> -->
        
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { inject } from "vue";

export default {
    setup() {
        const isRightSidebarOpen = inject("isRightSidebarOpen");

        const closeRightSidebar = () => {
            isRightSidebarOpen.value = false;
        };

        return { closeRightSidebar };
    },
    computed: {
        ...mapState(["showNotification", "loading"]),
        ...mapGetters(["orderItems", "totalAmount", "deliveryFee"]),
    },
    methods: {
        ...mapActions(["removeFromOrder", "submitOrder"]),
        async handleSubmitOrder() {
            await this.submitOrder();
        },
    },
};
</script>
