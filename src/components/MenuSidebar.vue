<template>
    <div class="fixed h-screen overflow-hidden rounded-r-3xl bg-primary">
        <div class="py-10 m-auto mx-6 w-fit">
            <div class="flex flex-col space-y-10">
                <MenuItem icon="bars" className="text-primary" />
                <MenuItem icon="house" />
                <RouterLink to="/">
                    <MenuItem
                        icon="pizza-slice"
                        :isActive="$route.path === '/'"
                    />
                </RouterLink>

                <MenuItem icon="calendar-day" className="scale-x-[-1]" />
                <MenuItem icon="credit-card" />
                <RouterLink to="/favorites">
                    <MenuItem
                        icon="heart"
                        :isActive="$route.path === '/favorites'"
                    />
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import MenuItem from "./MenuItem.vue";

export default {
    components: {
        MenuItem,
    },
};
</script>
