<template>
    <div class="fixed h-screen overflow-hidden rounded-r-3xl bg-primary">
        <div class="py-10 m-auto mx-6 w-fit">
            <div class="flex flex-col space-y-10">
                <MenuItem icon="bars" className="text-primary" />
                <MenuItem icon="house" />
                <MenuItem icon="pizza-slice" className="-rotate-45" />
                <MenuItem icon="calendar-day" className="scale-x-[-1]" />
                <MenuItem icon="credit-card" />
                <MenuItem icon="heart" />
            </div>
        </div>
    </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
    components: {
        MenuItem,
    },
};
</script>
