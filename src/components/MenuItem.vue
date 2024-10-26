<template>
    <div
        class="flex flex-row items-center justify-center p-4 rounded-full aspect-square"
        :class="className"
    >
        <font-awesome-icon
            :icon="['fas', icon]"
            :class="icon === 'bars' ? 'text-primary' : 'text-secondary'"
        />
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        className: {
            type: String,
            default: "",
        },
    },
};
</script>
