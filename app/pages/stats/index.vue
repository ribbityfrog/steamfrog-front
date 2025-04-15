<script setup lang="ts">

const series = [85000,120000]
const labels = ['Games', 'DLCs']
</script>

<template>
    <Page>
        <Hh1>Global basics</Hh1>
        <Section>
            <ClientOnly>
                <Chart width="500" type="pie" :labels="labels" :series="series" />
            </ClientOnly>
        </Section>
    </Page>
</template>
