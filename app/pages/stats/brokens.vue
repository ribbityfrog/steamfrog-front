<script setup lang="ts">

const brokens = leFetch.get('/stats/brokens', {}, { memory: 'PERSISTENT' })

const columns = ['banner', 'id', 'name', 'isFree', 'priceFinal'] as const

</script>

<template>
    <Page>
        <Hh1>Brokens</Hh1>
        <Section title="Very special thanks...">
            <Text>
                <p>
                    to or steam or studios, I don't know, but I had to remove some apps from the stats for various reasons. <br>
                </p>
                <p>
                    Mainly :
                    <Uul>
                        <li>The app is released with no release that (at least Steam API-wise)</li>
                        <li>The app is not free but has no price</li>                     
                    </Uul>
                </p>
                <p>
                    There is usually a reason for it :
                    <Uul>
                        <li>Mods either undated or without pricing consideration</li>
                        <li>Timestamp erronously set giving me a 0 in the API even if dated on the Store page</li>
                        <li>"Test" app that went all the way but with a lack of content</li>
                        <li>"Reasons"</li>
                    </Uul>
                </p>
                <p>
                    Any fix would be hazardous, temporary and heavily opinionated. <br>
                    So... here is the list of the considered released games that are <Prom second>not in the statistics</Prom>
                </p>
                <p>
                    <span class="text-xs">You can hate them a little with me, thanks</span> <br>
                    <span class="text-[10px]">FTL why are you here :(</span>
                </p>
                <p>
                    Since it's often undated, they are sorted by their API IDs
                </p>
            </Text>
        </Section>
        <ClientOnly>
            <Section class="mt-12">
                <SteamTable
                    v-model="brokens.data"
                    :loading="brokens.isFetching"
                    :columns="columns"
                    sticky
                    filterable />
            </Section>
        </ClientOnly>
    </Page>
</template>
