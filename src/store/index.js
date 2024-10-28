import { createStore } from "vuex";

export default createStore({
    state: {
        orderItems: [],
        showNotification: false,
        deliveryFee: 3,
        loading: false,
    },
    mutations: {
        ADD_TO_ORDER(state, item) {
            const existingItemIndex = state.orderItems.findIndex(
                (orderItem) => orderItem.id === item.id
            );

            if (existingItemIndex !== -1) {
                // Update existing item
                const existingItem = state.orderItems[existingItemIndex];
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + item.quantity,
                    totalPrice:
                        (existingItem.quantity + item.quantity) *
                        parseFloat(item.price.replace("$", "")),
                };
                state.orderItems.splice(existingItemIndex, 1, updatedItem);
            } else {
                // Add new item
                state.orderItems.push({
                    ...item,
                    totalPrice:
                        parseFloat(item.price.replace("$", "")) * item.quantity,
                });
            }
        },
        REMOVE_FROM_ORDER(state, itemId) {
            state.orderItems = state.orderItems.filter(
                (item) => item.id !== itemId
            );
        },
        CLEAR_ORDER(state) {
            state.orderItems = [];
        },
        SET_NOTIFICATION(state, value) {
            state.showNotification = value;
        },
        SET_LOADING(state, value) {
            state.loading = value;
        },
    },
    actions: {
        addToOrder({ commit }, item) {
            // Memastikan totalPrice dihitung dengan benar
            const orderItem = {
                ...item,
                totalPrice:
                    parseFloat(item.price.replace("$", "")) * item.quantity,
            };
            commit("ADD_TO_ORDER", orderItem);
        },
        removeFromOrder({ commit }, itemId) {
            commit("REMOVE_FROM_ORDER", itemId);
        },
        async submitOrder({ commit }) {
            commit("SET_LOADING", true);
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit("CLEAR_ORDER");
                    commit("SET_NOTIFICATION", true);
                    commit("SET_LOADING", false);
                    setTimeout(() => {
                        commit("SET_NOTIFICATION", false);
                    }, 3000);
                    resolve();
                }, 1000);
            });
        },
    },
    getters: {
        orderItems: (state) => state.orderItems,
        showNotification: (state) => state.showNotification,
        deliveryFee: (state) => state.deliveryFee,
        loading: (state) => state.loading,
        totalAmount: (state) => {
            const itemsTotal = state.orderItems.reduce(
                (total, item) => total + item.totalPrice,
                0
            );
            return itemsTotal + state.deliveryFee;
        },
    },
});
