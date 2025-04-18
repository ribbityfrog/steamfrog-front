<script setup lang="ts">

const props = defineProps({
    series: {
        type: [Array, null] as PropType<number[] | null>,
        required: true
    },
    labels: {
        type: Array as PropType<string[]>,
        required: true
    },
    donut: {
        type: Boolean,
        default: false
    }
})

const options = {
}

</script>

<template>
    <Chart
        :type="props.donut ? 'donut' : 'pie'"
        :labels="props.labels"
        :options="options"
        :series="props.series" />
</template>
