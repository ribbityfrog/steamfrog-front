<script setup lang="ts">

</script>

<template>
    <Layout>
        <Section full class="py-4">
            <HeaderMobile v-if="$device.isMobile" :menu="leAuth.isAuthenticated ? 'connected' : 'main'" />
            <HeaderDefault v-else :menu="leAuth.isAuthenticated ? 'connected' : 'main'" />
        </Section>
        <Section group full class="grow py-4">
            <slot />
        </Section>
        <footer class="w-full">
            <Section wide class="bg-darkness-50 dark:bg-darkness-700 py-4">
                <FooterDefault />
            </Section>
        </footer>
    </Layout>
</template>
