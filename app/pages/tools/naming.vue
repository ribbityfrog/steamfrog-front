<script setup lang="ts">

useSeoMeta({
    title: 'Steamfrog - Naming trends',
    ogTitle: 'Steamfrog - Naming trends',
    description: 'Find out instantly how many games include your chosen keywords in their name.',
    ogDescription: 'Find out instantly how many games include your chosen keywords in their name.',
    ogImage: '/img/brand/logo.png',
})

const keywords = reactive([])
const andor = ref(false)

const isSearching = ref(false)

const results: Ref<{
    count: number
    last: any[]
    chart: any
    andor: boolean
    keywords: string[]
}[]> = ref([])

function search() {
    isSearching.value = true
    leFetch.post('/tools/naming', { keywords: keywords, andor: andor.value }, {
        success: [(p) =>
        {
            let count = 0

            const chart = p.data.count.reduce((acc: Record<string, ({ x: string, y: number } | string)[]>, entry: any) => {

                count += entry.count

                acc.year!.push(entry.year)
                acc.count!.push({ x: entry.year, y: entry.count })

                return acc
            }, {
                year: [],
                count: []
            })

            results.value.unshift({ count, chart, last: p.data.last, andor: andor.value, keywords: [...keywords] })
        }
        ],
        anyway: [() => isSearching.value = false]
    })
}

</script>

<template>
    <Page class="gap-y-8">
        <Hh1>Naming trends</Hh1>
        <Section>
            <Text>
                <p>
                    The very first Steamfrog tool. 
                </p>
                <p>
                    Simple concept, you enter <Prom>keywords</Prom> and it tells you how many <Prom>games</Prom> have them in their name. <br>
                    You can also select if the game must have <Prom second>all</Prom> or <Prom second>at least one</Prom> of the <Prom>keywords</Prom>.
                </p>
                <p>
                    You'll have the :
                    <Uul>
                        <li><Prom second>Number</Prom> of games</li>
                        <li><Prom second>List</Prom> of the last released games</li>
                        <li><Prom second>Yearly trends</Prom></li>
                    </Uul>
                </p>
            </Text>
        </Section>
        <Section class-content="gap-y-4 mt-6">
            <TagKeywords v-model="keywords" v-model:andor="andor" />
            <Flex center class="gap-x-4 mt-4">
                <KitButton :disabled="keywords.length <= 0" :loading="isSearching" @click="search()">Search</KitButton>
                <KitButton color="cancel" :disabled="keywords.length <= 0" :loading="isSearching" @click="keywords.length = 0">Clear</KitButton>
            </Flex>
        </Section>
        <Section v-if="results.length > 0">
            <Flex col center class="gap-y-1">
                <p>
                    <span class="font-semibold text-(--ui-primary)">{{ results[0]!.count }} game{{ results[0]!.count > 1 ? 's' : '' }}</span> have <span class="text-(--ui-second)">{{ results[0]!.andor ? ' at least one ' : ' all of the ' }}</span> following keywords in their name
                </p>
                <p>
                    <span class="font-medium text-(--ui-second)">{{ results[0]!.keywords.join(' - ') }}</span>
                </p>
            </Flex>
            <!-- <TransitionGroup name="slide-fade" tag="div" mode="out-in" class="text-center space-y-2">
                <div v-for="(result, i) in results" :key="i">
                    <span class="font-semibold text-(--ui-primary)">{{ result.count }} game{{ result.count > 1 ? 's' : '' }}</span> have <span class="text-(--ui-second)">{{ result.andor ? 'at least one' : 'all of the' }}</span> following keywords in their name : <br>
                    <span class="font-medium text-(--ui-second)">{{ result.keywords.join(' - ') }}</span>
                </div>
            </TransitionGroup> -->
        </Section>
        <Section v-if="results.length > 0 && results[0]!.count > 0" group>
            <Section
                title="Yearly usage of your keywords" >
                <ChartLine
                    size="lg"
                    :data="results[0]!.count > 0" 
                    :labels="results[0]!.chart.year"
                    :series="[{ name: '', data: results[0]!.chart.count }]" />
            </Section>
            <Section title="Last released games with your keywords" class="mt-12">
                <SteamTable
                    v-model="results[0]!.last"
                    :columns="['banner', 'releaseDate', 'name', 'isFree', 'priceFinal']"
                    sticky
                    filterable
                    h-max="sm:h-150" />
            </Section>
        </Section>
    </Page>
</template>
