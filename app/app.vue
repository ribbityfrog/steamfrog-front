<script setup lang="ts">

toaster.init()

useSeoMeta({
    title: 'Steamfrog',
    ogTitle: 'Steamfrog',
    description: 'Dive into Steam games and dlcs statistics and fun tools using finely collected, analyzed and filtered data.',
    ogDescription: 'Dive into Steam games and dlcs statistics and fun tools using finely collected, analyzed and filtered data.',
    ogImage: '/img/brand/logo.png',
})

</script>

<template>
    <UApp :toaster="{ position: 'top-right' }">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(.44rem);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
