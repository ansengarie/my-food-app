<template>
    <div class="fixed right-0 w-3/12 h-screen overflow-hidden bg-white">
        <div
            class="flex flex-col justify-between h-full px-10 py-10 space-y-20 overflow-y-auto"
        >
            <!-- Order -->
            <div class="space-y-5 divide-y divide-solid">
                <!-- Top -->
                <div class="flex flex-row justify-between space-x-10">
                    <div class="flex flex-row items-center w-2/5 space-x-2">
                        <font-awesome-icon
                            :icon="['fas', 'user']"
                            class="text-primary"
                        />
                        <strong>Aji N</strong>
                    </div>
                    <div class="flex flex-row items-center w-3/5 space-x-2">
                        <font-awesome-icon
                            :icon="['fas', 'location-dot']"
                            class="text-primary"
                        />
                        <strong>West Bandung</strong>
                    </div>
                </div>
                <div class="flex flex-col pt-5 space-y-10">
                    <h1 class="text-xl font-bold">My order</h1>
                    <!-- List order Looping -->
                    <ul class="space-y-5">
                        <li class="flex flex-row justify-between">
                            <div class="flex flex-row items-center space-x-2">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4Af91__J4Uio6iSKrjkgMqq7ExumPol_bg&s"
                                    alt=""
                                    class="object-cover h-10 rounded-lg aspect-square"
                                />
                                <div
                                    class="flex flex-row items-center space-x-1"
                                >
                                    <font-awesome-icon
                                        :icon="['fas', 'xmark']"
                                        class="w-2"
                                    />
                                    <span>2</span>
                                </div>
                                <p>Aji Nuansa Sengarie</p>
                            </div>
                            <div class="flex flex-row items-center space-x-1">
                                <strong class="text-xl">$2</strong>
                                <font-awesome-icon :icon="['fas', 'xmark']" />
                            </div>
                        </li>
                        <li class="flex flex-row justify-between">
                            <div class="flex flex-row items-center space-x-2">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D4D03AQEO4-PPM8je-Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701310199366?e=1735171200&v=beta&t=okrAqgvutiEKKNUSRO13T7eRtXy0UhRN11Fn5v9vy0s"
                                    alt=""
                                    class="object-cover h-10 rounded-lg aspect-square"
                                />
                                <div
                                    class="flex flex-row items-center space-x-1"
                                >
                                    <font-awesome-icon
                                        :icon="['fas', 'xmark']"
                                        class="w-2"
                                    />
                                    <span>1</span>
                                </div>
                                <p>Rayhan Abduhuda</p>
                            </div>
                            <div class="flex flex-row items-center space-x-1">
                                <strong class="text-xl">$1,5</strong>
                                <font-awesome-icon :icon="['fas', 'xmark']" />
                            </div>
                        </li>
                    </ul>
                    <div class="flex flex-row justify-between">
                        <div>Delivery</div>
                        <strong class="text-xl">$0</strong>
                    </div>
                </div>
                <div class="flex flex-row justify-between pt-5">
                    <div class="flex flex-row space-x-3">
                        <h3>Persons:</h3>
                        <div class="flex flex-row items-center space-x-2">
                            <font-awesome-icon
                                :icon="['fas', 'minus']"
                                class="p-1 rounded-full aspect-square bg-slate-200"
                            />

                            <strong class="text-xl">2</strong>
                            <font-awesome-icon
                                :icon="['fas', 'plus']"
                                class="p-1 rounded-full aspect-square bg-slate-200"
                            />
                        </div>
                    </div>
                    <strong class="flex flex-row space-x-5 text-xl">
                        <span>Total:</span>
                        <span>$7</span>
                    </strong>
                </div>
            </div>
            <div class="flex flex-col space-y-4">
                <!-- Bottom -->
                <button
                    class="py-4 text-xl font-bold tracking-widest text-white rounded-xl bg-primary"
                >
                    Submit order
                </button>
                <button
                    class="relative py-4 rounded-xl bg-secondary text-slate-400"
                >
                    <div
                        class="flex flex-row items-center justify-center space-x-4"
                    >
                        <img
                            src="https://cdn.antaranews.com/cache/1200x800/2023/03/02/1-Mastercard-Logo.png"
                            alt=""
                            class="h-10"
                        />
                        <span>+62 895-1516-4264</span>
                    </div>
                    <small class="absolute text-xs right-3 top-2">Edit</small>
                </button>
            </div>
        </div>
    </div>
</template>
