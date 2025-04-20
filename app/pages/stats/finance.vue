<script setup lang="ts">

const count = leFetch.get('/stats/temp/count', {}, { memory: 'PERSISTENT' })
const finance = leFetch.get('/stats/temp/finance', {}, { memory: 'PERSISTENT' })

const serieFreeGames = computed(() => {
    if (!(finance.status === 'SUCCESSFUL') || !(count.status === 'SUCCESSFUL'))
        return null
    return [finance.data.games_free_count, count.data.dlcs_count - finance.data.dlcs_free_count]
})

const serieFreeDlcs = computed(() => {
    if (!(finance.status === 'SUCCESSFUL') || !(count.status === 'SUCCESSFUL'))
        return null
    return [finance.data.dlcs_free_count, count.data.dlcs_count - finance.data.dlcs_free_count]
})

const serieValueComparison = computed(() => {
    if (!(finance.status === 'SUCCESSFUL'))
        return null
    return [finance.data.games_price_initial_sum, finance.data.dlcs_price_initial_sum]
})

</script>

<template>
    <Page>
        <Hh1>Finance</Hh1>
        <Section>
            <div class="text-center space-y-1">
                <p>
                    We know how many Apps, but what's their <Prom>value</Prom> ?
                </p>
            </div>
        </Section>
        <Section title="It's free :)" class-content="gap-y-6">
            <Text>
                <p>
                    A lot of people play <Prom>free</Prom> games on Steam. <br>
                </p>
                <p>
                    What's even more interesting to me, is when studios propose <Prom>free DLCs</Prom> with their game ! <br>
                    Let's see how often studios support games with free content.
                </p>
            </Text>
            <Flex full evenly wrap class="gap-y-12">
                <ChartPie
                    class="w-full sm:w-1/2"
                    title="Ratio Paid/Free Games"
                    :labels="['Free', 'Paid']"
                    :series="serieFreeGames" />
                <ChartPie
                    class="w-full sm:w-1/2"
                    title="Ratio Paid/Free DLCs"
                    :labels="['Free', 'Paid']"
                    :series="serieFreeDlcs" />
            </Flex>
        </Section>
        <Section title="Total value" class-content="gap-y-6">
            <Text center>
                <p>
                    But what about, is the current <Prom>total value</Prom> of the store ?
                </p>
                <p>
                    In all the calculations, only the <Prom>initial</Prom> and <Prom>final</Prom> prices of the apps are considered.
                    <br>The initial and final (if on sales) prices of the apps themselves are taken into account. <br>
                </p>
                <p>
                    Premiums, bundles and such are not counted as different apps and their prices aren't considered.
                </p>
            </Text>
            <Flex full evenly wrap class="gap-y-6">
                <div class="w-full sm:w-1/2 space-y-3">
                    <p>
                        Let's try to put things in perspective :
                        <Uul v-if="finance.isSuccessful && count.isSuccessful">
                            <li><Prom second>Games</Prom> <Prom>initial price</Prom> sum : <em>{{ numberToPrice(finance.data.games_price_initial_sum, true) }}</em></li>
                            <li><Prom second>Games</Prom> <Prom>selling price</Prom> sum : <em>{{ numberToPrice(finance.data.games_price_final_sum, true) }}</em></li>
                            <li><Prom>Average</Prom> <Prom second>game</Prom> <Prom>initial price</Prom> : <em>{{ numberToPrice(finance.data.games_price_initial_avg, true) }}</em></li>
                            <li><Prom>Average</Prom> <Prom second>game</Prom> <Prom>discount</Prom> : <em>{{ finance.data.games_price_discount_avg }}%</em></li>
                            <li class="mt-2"><Prom second>DLCs</Prom> <Prom>initial price</Prom> sum : <em>{{ numberToPrice(finance.data.dlcs_price_initial_sum, true) }}</em></li>
                            <li><Prom second>DLCs</Prom> <Prom>selling price</Prom> sum : <em>{{ numberToPrice(finance.data.dlcs_price_final_sum, true) }}</em></li>
                            <li><Prom>Average</Prom> <Prom second>DLC</Prom> <Prom>initial price</Prom> : <em>{{ numberToPrice(finance.data.dlcs_price_initial_avg, true) }}</em></li>
                            <li><Prom>Average</Prom> <Prom second>DLC</Prom> <Prom>discount</Prom> : <em>{{ finance.data.dlcs_price_discount_avg }}%</em></li>
                        </Uul>
                    </p>
                </div>
                <ChartPie
                    class="w-full sm:w-1/2"
                    title="Total initial value ratio Games VS DLCs"
                    :labels="['Games value', 'DLCs value']"
                    :series="serieValueComparison" />
            </Flex>
        </Section>
    </Page>
</template>
