<template>
    <div class="h-full overflow-hidden bg-primary md:rounded-r-3xl">
        <div class="py-4 mx-auto w-fit md:py-10 md:mx-6">
            <div class="flex flex-col space-y-10">
                <!-- Close button for mobile -->
                <!-- <button @click="closeLeftSidebar" class="items-center mt-20 md:hidden">
                    <font-awesome-icon icon="times" />
                </button> -->
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
import MenuItem from "./MenuItem.vue";
import { inject } from "vue";

export default {
    setup() {
        const isLeftSidebarOpen = inject("isLeftSidebarOpen");

        const closeLeftSidebar = () => {
            isLeftSidebarOpen.value = false;
        };

        return { closeLeftSidebar };
    },
    components: {
        MenuItem,
    },
};
</script>
