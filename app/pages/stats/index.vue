<script setup lang="ts">

const series = [85000,120000]
const labels = ['Games', 'DLCs']
</script>

<template>
    <Page>
        <Hh1>Global basics</Hh1>
        <Section class="text-lg text-center">
            <p>
                If you are here, I probably gave you the link too early <br>
                But is it my fault ? Kind of <br>
                But who am I to judge ? <br>
                See you tomorrow
            </p>
        </Section>
        <Section>
            <ClientOnly>
                <Chart width="500" type="pie" :labels="labels" :series="series" />
                <!-- <ApexChart width="500" :series="series" type="pie" :options="options" /> -->
            </ClientOnly>
        </Section>
    </Page>
</template>
