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
    smooth: {
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
            bar: {
                borderRadius: 5,
            }
        },
        stroke: {
            curve: props.smooth ? 'smooth' : 'straight'
        },
        yaxis: {
        }
    },
    ...props.options
}

</script>

<template>
    <Chart
        type="line"
        :labels="props.labels"
        :options="mergedPptions"
        :series="props.series" />
</template>
