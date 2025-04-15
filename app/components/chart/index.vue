<script setup lang="ts">

const colorMode = useColorMode()

const props = defineProps({
    type: {
        type: String as PropType<'pie' | 'donut'>,
        required: true
    },
    labels: {
        type: Array as PropType<string[]>,
        required: true
    },
    series: {
        type: Array as PropType<number[]>,
        required: true
    }
})

const options = computed(() => ({
    theme: {
        palette: 'palette8'
    },
    chart: {
        background: 'transparent',
    },
    legend: {
        labels: {
            colors: colorMode.value === 'dark' ? '#ffffff' : '#000000'
        }
    },
    tooltip: {
    },
    labels: props.labels
}))

</script>

<template>
    <ApexChart :type="props.type" :options="options" :series="props.series" />
</template>
