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
    andor: boolean
    keywords: string[]
}[]> = ref([])

function search() {
    isSearching.value = true
    leFetch.post('/tools/naming', { keywords: keywords, andor: andor.value }, {
        success: [(p) =>
            results.value.unshift({ count: p.data, andor: andor.value, keywords: [...keywords] })
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
                    Some ground rules :
                    <Uul>
                        <li>Case insensitive</li>
                        <li>Max 32 characters in a keyword (can be several words)</li>
                        <li>Max 16 keywords</li>
                        <li>Works with foreign characters and emojis</li>
                        <li>Only for released not broken games for now</li>
                    </Uul>
                </p>
                <p>
                    Coming later :
                    <Uul>
                        <li>List of most recent and most liked found games</li>
                        <li>Adding yearly trends</li>
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
        <Section>
            <TransitionGroup name="slide-fade" tag="div" mode="out-in" class="text-center space-y-2">
                <div v-for="(result, i) in results" :key="i">
                    <span class="font-semibold text-(--ui-primary)">{{ result.count }} game{{ result.count > 1 ? 's' : '' }}</span> have <span class="text-(--ui-second)">{{ result.andor ? 'at least one' : 'all of the' }}</span> following keywords in their name : <br>
                    <span class="font-medium text-(--ui-second)">{{ result.keywords.join(' - ') }}</span>
                </div>
            </TransitionGroup>
        </Section>
        <Section>
            <p v-if="results.length > 0" class="text-center text-xl text-(--ui-second) animate-pulse">
                To be continued...
            </p>
        </Section>
    </Page>
</template>
