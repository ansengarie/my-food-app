<template>
    <button
        type="button"
        class="flex flex-row items-center px-5 py-2 space-x-4 rounded-full"
        :class="{
            'bg-primary text-white': isActive,
            'bg-white text-slate-400': !isActive,
        }"
        @click="$emit('click')"
    >
        <font-awesome-icon
            :icon="['fas', icon]"
            :class="{ 'text-slate-400': !isActive, 'text-white': isActive }"
        />
        <span class="whitespace-nowrap">{{ label }}</span>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
