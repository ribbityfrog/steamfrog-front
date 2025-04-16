<script setup lang="ts">

const colorMode = useColorMode()

const props = defineProps({
    type: {
        type: String as PropType<'pie' | 'donut' | 'radar' | 'bar' | 'line'>,
        required: true
    },
    labels: {
        type: Array as PropType<string[]>,
        required: true
    },
    series: {
        type: Array as PropType<
        number[] |
        { name: string, data: number[] }[] |
        [number, number][] | 
        { data: { x: number, y: number }[] }[] | 
        { data: { x: string, y: number }[] }[] | 
        { data: { x: number, y: string }[] }[] | 
        { data: { x: `${number}/${number}/${number}`, y: number }[] }[] >,
        required: true
    },
    title: {
        type: String,
        default: undefined
    },
    subtitle: {
        type: String,
        default: undefined
    },
    options: {
        type: Object as PropType<any>,
        default: () => ({})
    }
})

const computedOptions = computed(() => ({
    ...{
        theme: {
            palette: 'palette8'
        },
        chart: {
            background: 'transparent',
            zoom: {
                allowMouseWheelZoom: false
            },
            toolbar: {
                tools: {
                    download: false
                }
            }
        },
        title: {
            text: props.title,
            style: {
                color: colorMode.value === 'dark' ? '#ffffff' : '#000000'
            }
        },
        subtitle: {
            text: props.subtitle,
            style: {
                color: colorMode.value === 'dark' ? '#ffffff' : '#000000'
            }
        },
        legend: {
            labels: {
                colors: colorMode.value === 'dark' ? '#ffffff' : '#000000'
            }
        },
        tooltip: {
        },
        labels: props.labels
    },
    ...props.options
}))

</script>

<template>
    <ApexChart :type="props.type" :labels="props.labels" :options="computedOptions" :series="props.series" />
</template>
