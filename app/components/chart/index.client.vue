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
        type: [Array, null] as PropType<
        number[] |
        { name: string, data: number[] }[] |
        [number, number][] | 
        { data: { x: number, y: number }[] }[] | 
        { data: { x: string, y: number }[] }[] | 
        { data: { x: number, y: string }[] }[] | 
        { data: { x: `${number}/${number}/${number}`, y: number }[] }[] |
        null >,
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
    },
    size: {
        type: String,
        default: undefined
    },
    width: {
        type: Number,
        default: undefined
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

let chartWidth = 500
let skeletonSize = 'w-[480px] h-[350px]'
if (props.width)
    chartWidth = props.width
else
{
    if (props.size === 'sm')
    {
        chartWidth = 350
        skeletonSize = 'w-[320px] h-[200px]'
    }
    else if (props.size === 'lg')
    {
        chartWidth = 1000
        skeletonSize = 'w-[960px] h-[600px]'
    }
}


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
    <Transition name="slide-fade" mode="out-in">
        <ApexChart
            v-if="props.series !== null"
            :width="chartWidth"
            :type="props.type"
            :labels="props.labels"
            :options="computedOptions"
            :series="props.series"
            v-bind="$attrs" />
        <USkeleton v-else :class="`${skeletonSize} ${props.type === 'pie' || props.type === 'donut' ? 'rounded-full' : ''}`"/>
    </Transition>
</template>
