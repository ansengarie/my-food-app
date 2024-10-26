<template>
    <div class="flex flex-row w-full space-x-5">
        <div class="relative w-1/2 bg-white rounded-full">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="absolute top-3 left-3 text-slate-400" />
            <input
                type="search"
                name="search"
                id="search"
                class="w-full py-2 pl-10 pr-5 bg-white rounded-full"
                placeholder="Search"
            />
        </div>
        <button type="submit" class="flex flex-row items-center px-5 py-2 space-x-4 bg-white rounded-full text-slate-400">
            <font-awesome-icon :icon="['fas', 'sliders']" class="text-slate-400" />
            <span>Filter</span>
        </button>
    </div>
</template>
