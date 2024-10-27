<template>
    <div
        class="flex flex-row items-center justify-center p-4 rounded-full aspect-square"
        :class="{ 'bg-white/25' : isActive }"
    >
        <font-awesome-icon
            :icon="['fas', icon]"
            :class="{
                'text-primary': icon === 'bars',
                'text-secondary': !isActive && icon !== 'bars',
                'text-white ': isActive && icon !== 'bars',
                '-rotate-45' : icon === 'pizza-slice',
            }"
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
        isActive: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
