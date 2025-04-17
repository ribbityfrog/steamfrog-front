<script setup lang="ts">

const stats = leFetch.get('/stats/global', {}, { memory: 'PERSISTENT' })
const undated = leFetch.get('/stats/undated', {}, { memory: 'PERSISTENT' })

const totalCounts = computed(() => {
    if (!(stats.status === 'SUCCESSFUL'))
        return null
    return stats.data.reduce((acc: Record<string, number>, entry: any) => {
        acc.gamesCount += entry.meta.games_count
        acc.dlcsCount += entry.meta.dlcs_count
        acc.gamesWindowsCount += entry.meta.games_windows_count
        acc.gamesMacCount += entry.meta.games_mac_count
        acc.gamesLinuxCount += entry.meta.games_linux_count
        acc.dlcsWindowsCount += entry.meta.dlcs_windows_count
        acc.dlcsMacCount += entry.meta.dlcs_mac_count
        acc.dlcsLinuxCount += entry.meta.dlcs_linux_count
        return acc
    }, {
        gamesCount: 0,
        dlcsCount: 0,
        gamesWindowsCount: 0,
        gamesMacCount: 0,
        gamesLinuxCount: 0,
        dlcsWindowsCount: 0,
        dlcsMacCount: 0,
        dlcsLinuxCount: 0
    })
})

const undatedColumns = [
    {
        id: 'banner',
    },
    {
        accessorKey: 'id',
        header: '#',
        sortable: true
    },
    {
        accessorKey: 'name',
        header: 'Name',
        sortable: true
    },
    {
        accessorKey: 'isFree',
        header: 'Free',
        bool: true,
        sortable: true
    },
    {
        id: 'price',
        accessorKey: 'meta.price',
        header: 'Price',
        price: true,
        sortable: true
    }
]

const yearlyCounts = computed(() => {
    if (!(stats.status === 'SUCCESSFUL'))
        return null

    return stats.data.reduce((acc: Record<string, ({ x: string, y: number } | string)[]>, entry: any) => {
        if (!entry.meta.release_year)
            return acc

        acc.year!.push(entry.meta.release_year)
        acc.gamesCount!.push({ x: entry.meta.release_year, y: entry.meta.games_count })
        acc.gamesWindowsCount!.push({ x: entry.meta.release_year, y: entry.meta.games_windows_count })
        acc.gamesMacCount!.push({ x: entry.meta.release_year, y: entry.meta.games_mac_count })
        acc.gamesLinuxCount!.push({ x: entry.meta.release_year, y: entry.meta.games_linux_count })
        acc.dlcsCount!.push({ x: entry.meta.release_year, y: entry.meta.dlcs_count })
        acc.dlcsWindowsCount!.push({ x: entry.meta.release_year, y: entry.meta.dlcs_windows_count })
        acc.dlcsMacCount!.push({ x: entry.meta.release_year, y: entry.meta.dlcs_mac_count })
        acc.dlcsLinuxCount!.push({ x: entry.meta.release_year, y: entry.meta.dlcs_linux_count })

        return acc
    }, {
        year: [],
        gamesCount: [],
        gamesWindowsCount: [],
        gamesMacCount: [],
        gamesLinuxCount: [],
        dlcsCount: [],
        dlcsWindowsCount: [],
        dlcsMacCount: [],
        dlcsLinuxCount: [],
    })
})

</script>

<template>
    <Page>
        <Hh1>Global basics</Hh1>
        <Section class="mb-12" class-content="text-center gap-y-3">
            <p>
                You can find global data about the number of games and dlcs. <br>
                I'm having a hard time customizing the charts the way I want, bare me with a little while please :x
            </p>
            <p>
                On April and maybe May, I'm gonna reset the base daily to fix some incoherence <br>
                The stats will often look weird and will change a lot, I'm sorry :/
            </p>
        </Section>
        <Section v-if="!stats.isSuccessful">
            <p class="text-center text-xl sm:text-4xl animate-bounce text-(--ui-second)">
                Wait, don't move, it's loading...
            </p>
        </Section>
        <ClientOnly>
            <Section v-if="stats.isSuccessful" goup class-content="gap-y-12">
                <Section class-content="gap-y-12">
                    <Flex>
                        <ChartPie
                            width="500"
                            title="Games VS DLCs"
                            subtitle="Number of games VS number of DLCs"
                            :labels="['Games', 'DLCs']"
                            :series="[totalCounts.gamesCount, totalCounts.dlcsCount]" />
                    </Flex>
                    <Flex full evenly wrap class="gap-y-8">
                        <ChartBar
                            horizontal
                            distributed
                            width="500"
                            title="Distribution of games per platform"
                            :labels="['Total', 'Windows', 'Mac', 'Linux']"
                            :series="[{
                                data: [{
                                    x: 'Total',
                                    y: totalCounts.gamesCount,
                                }, {
                                    x: 'Windows',
                                    y: totalCounts.gamesWindowsCount,
                                }, {
                                    x: 'Mac',
                                    y: totalCounts.gamesMacCount,
                                }, {
                                    x: 'Linux',
                                    y: totalCounts.gamesLinuxCount,
                                }]
                            }]" />
                        <ChartBar
                            horizontal
                            distributed
                            width="500"
                            title="Distribution of DLCs per platform"
                            :labels="['Total', 'Windows', 'Mac', 'Linux']"
                            :series="[{
                                data: [{
                                    x: 'Total',
                                    y: totalCounts.dlcsCount,
                                }, {
                                    x: 'Windows',
                                    y: totalCounts.dlcsWindowsCount,
                                }, {
                                    x: 'Mac',
                                    y: totalCounts.dlcsMacCount,
                                }, {
                                    x: 'Linux',
                                    y: totalCounts.dlcsLinuxCount,
                                }]
                            }]" />
                    </Flex>
                </Section>
                <Section v-if="yearlyCounts">
                    <ChartLine
                        width="1000"
                        title="Distribution per year"
                        :options="{
                            stroke:
                                { dashArray: [0, 0, 0, 6, 6, 6] }
                        }"
                        :labels="yearlyCounts.year"
                        :series="[
                            // {
                            //     name: 'Games',
                            //     data: yearlyCounts.gamesCount,
                            // },
                            // {
                            //     name: 'DLCs',
                            //     data: yearlyCounts.dlcsCount 
                            // },
                            {
                                name: 'Games on Windows',
                                data: yearlyCounts.gamesWindowsCount 
                            },
                            {
                                name: 'Games on Mac',
                                data: yearlyCounts.gamesMacCount 
                            },
                            {
                                name: 'Games on Linux',
                                data: yearlyCounts.gamesLinuxCount
                            },
                            {
                                name: 'DLCs on Windows',
                                data: yearlyCounts.dlcsWindowsCount
                            },
                            {
                                name: 'DLCs on Mac',
                                data: yearlyCounts.dlcsMacCount
                            },
                            {
                                name: 'DLCs on Linux',
                                data: yearlyCounts.dlcsLinuxCount
                            },
                        ]"
                    />
                </Section>
                <Section class="gap-y-6">
                    <p class="space-y-2">
                        The games below seem to be released but have no release date, thus messing up some stats. <br>
                        They are either mods categorized as games or just "reasons". <br>
                        When they are not free but have no price, it's because they are not listed as free in the store but still have no listed price. They are usually actually free. <br>
                        Sometime you just can't buy/download/play them, they just exist nicely <br>
                        They are sorted thanks to their ID, so most likely from the most recent to the oldest <br>
                        <span class="font-medium">Let's just hate them together, thanks.</span> <br>
                        <span class="text-xs italic">There is a bunch of dlcs too but I'm sad enough with just the games</span>
                    </p>
                    <KitTable v-model="undated.data" :columns="undatedColumns" sticky>
                        <template #banner-cell="{ row }">
                            <SteamImg :src="+row.original.id" />
                        </template>
                        <template #name-cell="{ row }">
                            <KitLink :to="steamAppLink(row.original.id)" tab>{{ row.original.name }}</KitLink>
                        </template>
                    </KitTable>
                </Section>
            </Section>
        </ClientOnly>
    </Page>
</template>
