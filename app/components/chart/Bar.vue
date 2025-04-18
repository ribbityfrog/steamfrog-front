<script setup lang="ts">

const props = defineProps({
    series: {
        type: [Array, null] as PropType< { data: { x: string, y: number }[] }[] | null>,
        required: true
    },
    labels: {
        type: Array as PropType<string[]>,
        required: true
    },
    reversed: {
        type: Boolean,
        default: false
    },
    horizontal: {
        type: Boolean,
        default: false
    },
    undistributed: {
        type: Boolean,
        default: false
    }
})

const options = {
    plotOptions: {
        bar: {
            borderRadius: 5,
            horizontal: props.horizontal,
            distributed: !props.undistributed
        }
    },
    yaxis: {
        reversed: props.reversed
    }
}

</script>

<template>
    <Chart
        type="bar"
        :labels="props.labels"
        :options="options"
        :series="props.series" />
</template>
