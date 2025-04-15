<script setup lang="ts">

const options = {
    chart: {
        type: 'pie'
    },
    labels: ['Games', 'DLCs']
}
const series = [85000,120000]

</script>

<template>
    <Page>
        <Hh1>Global basics</Hh1>
        <Section title="Games / DLCs">
            <ClientOnly>
                <ApexChart width="500" :series="series" :options="options" />
            </ClientOnly>
        </Section>
    </Page>
</template>
