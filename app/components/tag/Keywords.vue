<script setup lang="ts">

const keywords = defineModel<string[]>({ default: [] })
const andor = defineModel<boolean>('andor', { default: undefined })

const keyword = ref('')

function addKeyword() {
    if (isAddDisabled.value)
        return

    keywords.value.push(keyword.value.substring(0, 32).toLowerCase())
    keyword.value = ''
}

const isAddDisabled = computed(() => {
    const nkw = keyword.value.substring(0, 32).toLowerCase()
    if (nkw.length <= 0 || keywords.value.includes(nkw) || keywords.value.length >= 16)
        return true
    return false
})

</script>

<template>
    <Flex full center col class="gap-y-4">
        <Flex center-end class="gap-x-4">
            <UFormField name="keyword" label="Add a new keyword">
                <UInput
                    v-model="keyword"
                    :maxlength="32"
                    placeholder="Outer, dave, cry..."
                    @keyup.enter="addKeyword()"
                />
            </UFormField>
            <KitButton
                :disabled="isAddDisabled"
                base="light"
                color="second"
                @click="addKeyword()">Add</KitButton>
        </Flex>
        <UCheckbox v-if="andor !== undefined" v-model="andor" label="At least one of the keywords" />
        <TransitionGroup name="slide-fade" tag="div" mode="out-in" class="flex flex-row flex-wrap justify-center content-center gap-4 mt-4">
            <TagKeyword
                v-for="(kw, idx) in keywords"
                :key="kw"
                :andor="andor === undefined ? false : andor"
                :keyword="kw"
                @remove="keywords.splice(idx, 1)" />
        </TransitionGroup>
    </Flex>
</template>
