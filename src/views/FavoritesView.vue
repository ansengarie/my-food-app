<template>
    <section
        class="flex flex-col w-full overflow-hidden md:flex-row bg-secondary"
    >
    <!-- Hamburger button for mobile -->
        <button
            @click="toggleLeftSidebar"
            class="fixed z-50 top-4 left-4 md:hidden"
        >
            <font-awesome-icon icon="bars" />
        </button>
        <!-- Left Sidebar -->
         <MenuSidebar
            :class="{
                'translate-x-0': isLeftSidebarOpen,
                '-translate-x-full': !isLeftSidebarOpen,
                'md:translate-x-0': true, // Selalu tampilkan di desktop
            }"
            class="fixed left-0 top-0 h-full w-64 md:w-[6%] transition-transform duration-300 ease-in-out z-40"
        />
        <div class="flex-1 md:ml-[6%] ml-0 bg-slate-200">
            <div class="flex flex-col h-screen px-10 py-10 space-y-10">
                <div class="flex max-h-screen rounded-md bg-secondary drop-shadow-md">
                    <div class="my-20 ml-10 space-y-2 md:ml-20">
                        <h1 class="text-4xl font-bold text-primary">
                            Your Favorite Flavors!
                        </h1>
                        <h3>
                            Discover and revisit the dishes you love. Because
                            every meal should be a favorite!
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import MenuSidebar from "../components/MenuSidebar.vue";
import { inject } from "vue";

export default {
    setup() {
        const isLeftSidebarOpen = inject("isLeftSidebarOpen");
        const isRightSidebarOpen = inject("isRightSidebarOpen");

        const toggleLeftSidebar = () => {
            isLeftSidebarOpen.value = !isLeftSidebarOpen.value;
        };

        const toggleRightSidebar = () => {
            isRightSidebarOpen.value = !isRightSidebarOpen.value;
        };

        return {
            isLeftSidebarOpen,
            isRightSidebarOpen,
            toggleLeftSidebar,
            toggleRightSidebar,
        };
    },
    components: {
        MenuSidebar,
    },
};
</script>
