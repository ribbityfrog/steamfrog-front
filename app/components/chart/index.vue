<script setup lang="ts">

// const colorMode = useColorMode()

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

// const colors = computed(() => colorMode.value === 'dark' ?
//     {
//         text: '#ff0000',
//         dimmed: '#ffffff',
//     } :
//     {
//         text: '#000000',
//         dimmed: '#000000',
//     }
// )

const fontFamilyTitle = 'Inter, sans-serif'
const fontFamilyText = 'Montserrat, sans-serif'

const computedOptions = computed(() => ({
    ...{
        theme: {
            palette: 'palette7'
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
                fontFamily: fontFamilyTitle,
                fontWeight: 500
            }
        },
        subtitle: {
            text: props.subtitle,
            style: {
                fontFamily: fontFamilyText
            }
        },
        legend: {
            labels: {
                // colors: colors.value.text
            }
        },
        tooltip: {
            enabled: props.type === 'bar' ? false : true,
            followCursor: true,
            fillSeriesColor: true,
            x: {
                show: false
            },
            style: {
                fontSize: '16px',
                fontFamily: fontFamilyTitle,
            }
        },
        labels: props.labels
    },
    xaxis: {
        labels: {
            style: {
                fontFamily: fontFamilyText
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                fontFamily: fontFamilyText
            }
        }
    },
    responsive: [
        {
            breakpoint: 1000,
            options: {
                chart: {
                    width: 350
                },
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    followCursor: false,
                    style: {
                        fontSize: '12px',
                    }
                },
            }
        }
    ],
    ...props.options
}))

</script>

<template>
    <ApexChart :type="props.type" :labels="props.labels" :options="computedOptions" :series="props.series" />
</template>
