<script setup lang="ts">

const props = defineProps({
    series: {
        type: [Array, null] as PropType< { name?: string, data: { x: string, y: number }[] }[] | null>,
        required: true
    },
    labels: {
        type: Array as PropType<string[]>,
        required: true
    },
    distributed: {
        type: Boolean,
        default: false
    },
    options: {
        type: Object as PropType<any>,
        default: () => ({})
    }
})

const mergedPptions = {
    ...{
        plotOptions: {
            heatmap: {
                distributed: props.distributed,
            }
        },
        yaxis: {
        }
    },
    ...props.options
}

</script>

<template>
    <Chart
        type="heatmap"
        :labels="props.labels"
        :options="mergedPptions"
        :series="props.series" />
</template>
