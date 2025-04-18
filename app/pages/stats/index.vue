<script setup lang="ts">

const count = leFetch.get('/stats/temp/count', {}, { memory: 'PERSISTENT' })
const maturity = leFetch.get('/stats/temp/maturity', {}, { memory: 'PERSISTENT' })

const serieCount = computed(() => {
    if (!(count.status === 'SUCCESSFUL'))
        return null
    return [count.data.games_count, count.data.dlcs_count]
})

const serieMaturity = computed(() => {
    if (!(maturity.status === 'SUCCESSFUL'))
        return null

    const mat = maturity.data
    return [{
        data: [
            {
                x: 'Mature',
                y: +mat.mature_count
            },
            {
                x: 'Violent',
                y: +mat.violent_count
            },
            {
                x: 'Nudity',
                y: +mat.nudity_count
            },
            {
                x: 'Sexual',
                y: +mat.sexual_count
            },
            {
                x: 'Porn',
                y: +mat.porn_count,
            } ]
    } ]
})

</script>

<template>
    <Page>
        <Hh1>Basics</Hh1>
        <Section/>
        Let's start with the basics
        <Section title="Games and DLCs">
            <Flex full evenly wrap class="gap-y-12 sm:flex-row-reverse">
                <div class="w-full sm:w-1/2">
                    Difference between and Games and DLCs + first numbers <br>
                    Stats based on released games
                </div>
                <ChartPie
                    class="w-full sm:w-1/2"
                    title="Distribution Games VS DLCs"
                    :labels="['Games', 'DLCs']"
                    :series="serieCount" />
            </Flex>
        </Section>
        <Section title="Games maturity">
            <Flex full evenly wrap>
                <div class="w-full sm:w-1/2">
                    descrip
                </div>
                <ChartBar
                    class="w-full sm:w-1/2"
                    title="Content type couting"
                    :labels="['Mature', 'Violent', 'Nudity', 'Sexual', 'Porn']"
                    :series="serieMaturity" />
            </Flex>
        </Section>
    </Page>
</template>
