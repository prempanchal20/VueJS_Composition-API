<template>
    <section class="fonts">
        <Navbar />
        <RouterView v-slot="{ Component }">
            <Transition name="routew" mode="out-in">
                <component :is="Component" />
            </Transition>
        </RouterView>
    </section>
</template>

<style>
.fonts {
    font-family: 'Poppins', sans-serif;
}

.routew-enter-active,
.routew-leave-active {
    transition: all 0.5s ease-in;
}

.routew-enter-from,
.routew-leave-to {
    opacity: 1;
    transform: translateY(100px);
}
</style>
