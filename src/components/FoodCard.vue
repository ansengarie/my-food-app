<template>
    <div class="space-y-5">
        <div class="relative bg-white rounded-3xl">
            <div
                class="absolute inset-x-0 top-0 flex justify-between px-5 py-2 bg-white/75 rounded-t-3xl"
            >
                <strong>{{ distance }} away</strong>
                <strong>{{ time }}</strong>
            </div>
            <img :src="imgSrc" alt="" />
        </div>
        <div>
            <div class="flex justify-between">
                <h1 class="font-bold">{{ title }}</h1>
                <strong>{{ price }}</strong>
            </div>
            <div class="flex justify-between">
                <p>{{ category }}</p>
                <div class="flex items-center space-x-1">
                    <strong>{{ rating }}</strong>
                    <font-awesome-icon
                        :icon="['fas', 'star']"
                        class="text-warning"
                    />
                    <span>({{ reviews }} reviews)</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgSrc: String,
        title: String,
        price: String,
        distance: String,
        time: String,
        rating: String,
        reviews: String,
        category: String,
    },
};
</script>
