<template>
    <section class="flex flex-row w-full overflow-hidden bg-secondary">
        <!-- Left Sidebar -->
        <MenuSidebar />
        <div class="flex-1 ml-[6%] bg-slate-200">
            <div class="flex flex-col h-screen px-10 py-10 space-y-10">
                <div class="flex max-h-screen rounded-md bg-secondary drop-shadow-md">
                    <div class="my-20 ml-20">
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

export default {
    components: {
        MenuSidebar,
    },
};
</script>
