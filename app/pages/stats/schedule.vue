<script setup lang="ts">

const heatGames: Ref<{ name: string, data: { x: string, y: number }[] }[]> = ref([])
const heatTops: Ref<{ name: string, data: { x: string, y: number }[] }[]> = ref([])

function buildHeatmap(resp: any[], heat: Ref<{ name: string, data: { x: string, y: number }[] }[]>) {
    let year: string = ''
    let month: number = 12
    const data: { x: string, y: number }[] = []
    resp.forEach((elem: any) => {
        if (elem.year !== year) {
            while (month < 12)
            {
                data.push({ x: numberToMonth(month, true), y: 0 })
                month++
            }
            if (year.length !== 0)
                heat.value.push({ name: year, data: [...data] })
            year = elem.year
            data.length = 0
            month = 0
        }
        month++
        while (month < +elem.month)
        {
            data.push({ x: numberToMonth(month, true), y: 0 })
            month++
        }
        data.push({ x: numberToMonth(month, true), y: elem.games_count })
    })
    while (month < 12)
    {
        data.push({ x: numberToMonth(month, true), y: 0 })
        month++
    }
    heat.value.push({ name: year, data: [...data] })
}

const stats = leFetch.get('/stats/temp/schedule', {
    success: [(p) => {
        console.log(p.data.all)
        console.log(p.data.top)
        buildHeatmap(p.data.all, heatGames)
        buildHeatmap(p.data.top, heatTops)
    }]
}, { memory: 'PERSISTENT' })


</script>

<template>
    <Page>
        <Hh1>Release date strategy</Hh1>
        <Section class="mb-12" class-content="text-center gap-y-3">
            <Text>
                <p>
                    I currently don't have any <span class="font-medium text-(--ui-cancel)">selling data</span>, so I can't build statistics on it.
                </p>
                <p>
                    In the meantime, let's have a look on when <Prom second>games</Prom> have been <Prom>released</Prom><br>
                    compared to when the <Prom second>5000 best rated games</Prom> have been <Prom>released</Prom>.
                </p>
            </Text>
        </Section>
        <Section v-if="!stats.isSuccessful">
            <p class="text-center text-xl sm:text-4xl animate-bounce text-(--ui-second)">
                Wait, don't move, it's loading
            </p>
        </Section>
        <ClientOnly>
            <Section v-if="stats.isSuccessful" title="Release distribution of all games">
                <ChartHeatmap
                    size="lg"
                    distributed
                    :series="heatGames"
                    :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']" />
            </Section>
            <Section v-if="stats.isSuccessful" title="Release distribution of the 5000 best rated games" class="mt-12">
                <ChartHeatmap
                    size="lg"
                    distributed
                    :series="heatTops"
                    :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']" />
            </Section>
        </ClientOnly>
    </Page>
</template>
