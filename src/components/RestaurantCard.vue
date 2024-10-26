<template>
    <div class="space-y-5">
        <div class="relative bg-white rounded-3xl">
            <div
                class="absolute inset-x-0 top-0 flex flex-row justify-between px-5 py-2 rounded-t-3xl bg-white/75"
            >
                <strong>{{ restaurant.distance }}</strong>
                <strong>{{ restaurant.time }}</strong>
            </div>
            <img :src="restaurant.image" alt="" class="object-cover w-full aspect-square rounded-3xl"/>
        </div>
        <div>
            <div class="flex flex-row justify-between">
                <h1 class="font-bold">{{ restaurant.name }}</h1>
                <strong>{{ restaurant.price }}</strong>
            </div>
            <div class="flex flex-row justify-between">
                <p>{{ restaurant.category }}</p>
                <div class="flex flex-row items-center space-x-1">
                    <strong>{{ restaurant.feedback }}</strong>
                    <font-awesome-icon icon="star" class="text-warning" />
                    <span>({{ restaurant.reviews }} reviews)</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        restaurant: {
            type: Object,
            required: true,
        },
    },
};
</script>
