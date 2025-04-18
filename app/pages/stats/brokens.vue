<script setup lang="ts">

const brokens = leFetch.get('/stats/brokens', {}, { memory: 'PERSISTENT' })

const columns = ['banner', 'id', 'name', 'isFree', 'price'] as const

</script>

<template>
    <Page>
        <Hh1>Brokens</Hh1>
        <Section title="No release date">
            The games below seem to be released but have no release date, thus messing up some stats. <br>
            They are either mods categorized as games or just "reasons". <br>
            When they are not free but have no price, it's because they are not listed as free in the store but still have no listed price. They are usually actually free. <br>
            Sometime you just can't buy/download/play them, they just exist nicely <br>
            They are sorted thanks to their ID, so most likely from the most recent to the oldest <br>
        </Section>
        <ClientOnly>
            <Section title="If there is no price, it's free">
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
