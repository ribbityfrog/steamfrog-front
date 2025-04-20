<script setup lang="ts">

const stats = leFetch.get('/stats/temp/platforms', {}, { memory: 'PERSISTENT' })
const windowsless = leFetch.get('/stats/windowsless', {}, { memory: 'PERSISTENT' })

const totalCounts = computed(() => {
    if (!(stats.status === 'SUCCESSFUL'))
        return null
    return stats.data.reduce((acc: Record<string, number>, entry: any) => {
        acc.gamesCount += entry.games_count
        acc.dlcsCount += entry.dlcs_count
        acc.gamesWindowsCount += entry.games_windows_count
        acc.gamesMacCount += entry.games_mac_count
        acc.gamesLinuxCount += entry.games_linux_count
        acc.dlcsWindowsCount += entry.dlcs_windows_count
        acc.dlcsMacCount += entry.dlcs_mac_count
        acc.dlcsLinuxCount += entry.dlcs_linux_count
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


const yearlyCounts = computed(() => {
    if (!(stats.status === 'SUCCESSFUL'))
        return null

    return stats.data.reduce((acc: Record<string, ({ x: string, y: number } | string)[]>, entry: any) => {
        if (!entry.release_year)
            return acc

        acc.year!.push(entry.release_year)
        acc.gamesCount!.push({ x: entry.release_year, y: entry.games_count })
        acc.gamesWindowsCount!.push({ x: entry.release_year, y: entry.games_windows_count })
        acc.gamesMacCount!.push({ x: entry.release_year, y: entry.games_mac_count })
        acc.gamesLinuxCount!.push({ x: entry.release_year, y: entry.games_linux_count })
        acc.dlcsCount!.push({ x: entry.release_year, y: entry.dlcs_count })
        acc.dlcsWindowsCount!.push({ x: entry.release_year, y: entry.dlcs_windows_count })
        acc.dlcsMacCount!.push({ x: entry.release_year, y: entry.dlcs_mac_count })
        acc.dlcsLinuxCount!.push({ x: entry.release_year, y: entry.dlcs_linux_count })

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
        <Hh1>Mac & Linux</Hh1>
        <Section class="mb-12" class-content="text-center gap-y-3">
            <Text>

                <p>
                    "When you want to game, you need <Prom>Windows</Prom>"
                </p>
                <p>
                    Do you agree ? Well, let's see how <Prom>MacOS</Prom> and <Prom>Linux</Prom> fare
                </p>
            </Text>
        </Section>
        <Section v-if="!stats.isSuccessful">
            <p class="text-center text-xl sm:text-4xl animate-bounce text-(--ui-second)">
                Wait, don't move, it's loading...
            </p>
        </Section>
        <ClientOnly>
            <Section v-if="stats.isSuccessful" goup class-content="gap-y-12">
                <Section class-content="gap-y-12">
                    <Flex full evenly wrap class="gap-y-8">
                        <ChartBar
                            horizontal
                            distributed
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
                <Section v-if="yearlyCounts" title="Trends">
                    <Text class="text-center">
                        <p>
                            It's not encouraging, and sadly so is the general <Prom>trend</Prom>
                        </p>
                        <p>
                            Even if the number or games are fastly increasing every year, <br>
                            it doesn't seem to be the case for everyone.
                        </p>
                    </Text>
                    <ChartLine
                        size="lg"
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
                <Section title="They chose not to be on Windows">
                    <Text class="text-center">
                        <p>
                            You probably noticed not all the games are on <Prom>Windows</Prom> <br>
                            Here is the list of the braves
                        </p>
                        <p class="text-sm">
                            Except games like <Prom second>Arma</Prom>, making a special Mac and/or Linux version.
                        </p>
                    </Text>
                    <SteamTable
                        v-model="windowsless.data"
                        h-max="h-150"
                        :loading="windowsless.isFetching"
                        :columns="['banner', 'id', 'name', 'isFree', 'priceFinal']"
                        sticky
                        filterable />
                </Section>
            </Section>
        </ClientOnly>
    </Page>
</template>
