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
                x: 'Clean',
                y: +mat.vanilla_count
            },
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
        <Section>
            <div class="text-center space-y-1">
                <p>
                    Let's start with the basics : <Prom>Apps</Prom>
                </p>
                <p>
                    An <Prom>App</Prom> is either a <Prom>Game</Prom> or a <Prom>DLC</Prom> <br>
                    When we talk about <Prom>Apps</Prom>, it could refer to either one.
                </p>
                <p>
                    All the statistics are about <Prom second>Released</Prom> apps.
                    <Prom second>Upcoming</Prom> apps will have their own statistics.
                </p>
            </div>
        </Section>
        <Section title="Games and DLCs">
            <Flex full evenly wrap class="gap-y-12 sm:flex-row-reverse">
                <div class="w-full sm:w-1/2 space-y-3">
                    <Text>
                        <p>
                            On the Store, you'll find <Prom><em>{{ count.data.games_count + count.data.dlcs_count }}</em> Apps</Prom> :
                            <Uul>
                                <li><Prom><em>{{ count.data.games_count }}</em> Games</Prom></li>
                                <li><Prom><em>{{ count.data.dlcs_count }}</em> DLCs</Prom></li>
                            </Uul>
                        </p>
                    </Text>
                    <Text>
                        <p>
                            Games and DLCs are almost identical
                        </p>
                        <p>
                            They have their own price, release date, even reviews.
                        </p>
                        <p>
                            The key difference is that DLCs don't have <Prom second>Achievements</Prom second>. <br>
                            That's the reason why you'll see people complaining about not being able to 100% a game without buying the DLCs : <br>
                            <strong>The DLCs achievements are all in the game itself.</strong>
                        </p>
                    </Text>
                </div>
                <ChartPie
                    class="w-full sm:w-1/2"
                    title="Distribution Games VS DLCs"
                    :labels="['Games', 'DLCs']"
                    :series="serieCount" />
            </Flex>
        </Section>
        <Section title="Games maturity" class-content="gap-y-6">
            <p>
                Every <Prom second>App</Prom> can have <strong>multiple</strong> <Prom>Content type</Prom>, I usually call it <Prom>Maturity</Prom>.
            </p>
            <p class="text-center">
                As a Steam user, you can choose how the apps are filtered : <br>
                <KitLink to="https://store.steampowered.com/account/preferences/" local>Steam account preferences</KitLink>
            </p>
            <Flex full evenly wrap>
                <div class="w-full sm:w-1/2">
                    <Text>
                        <p>
                            To break it down, you'll find 5 Content types :
                            <Uul>
                                <li><Prom>General Mature</Prom> - Heavily involves topics like war, death, etc</li>
                                <li><Prom>Frequent Violence or Gore</Prom> - It doesn't have to be graphic</li>
                                <li><Prom>Some Nudity or Sexuality</Prom> - Suggestive scenes are enough</li>
                                <li><Prom>Frequent Nudity or Sexuality</Prom> - It's not about it but...</li>
                                <li><Prom>Adult Only or Sexuality</Prom> - Straight up porn</li>
                            </Uul>
                        </p>
                        <p>Let's call then <Prom>Mature</Prom>, <Prom>Violent</Prom>, <Prom>Nudity</Prom>, <Prom>Sexual</Prom> and <Prom>Porn</Prom>.</p>
                        <p>If you don't have an account, you can't find or browse <Prom>Sexual</Prom> and <Prom>Porn</Prom> apps</p>
                        <p>If the app falls into none of those types, we'll call it <Prom>Vanilla</Prom></p>
                    </Text>
                </div>
                <ChartBar
                    class="w-full sm:w-1/2"
                    title="Games maturity count"
                    :labels="['Vanilla', 'Mature', 'Violent', 'Nudity', 'Sexual', 'Porn']"
                    :series="serieMaturity" />
            </Flex>
        </Section>
    </Page>
</template>
