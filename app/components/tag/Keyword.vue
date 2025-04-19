<script setup lang="ts">

// const keyword = defineModel<string>({ required: true })

const emits = defineEmits(['remove'])

const props = defineProps({
    keyword: {
        type: String,
        required: true
    },
    andor: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <Flex inline :class="`gap-x-2 px-2 py-1 transition duration-300 ease-in-out border-2 ${props.andor ? 'border-dashed' : ''} border-(--ui-primary) rounded-xl`">
        <p class="dark:font-normal font-medium text-(--ui-primary)">{{ props.keyword }}</p>
        <KitIcon name="i-lucide-x" size="w-4 h-4" class="font-bold cursor-pointer transform-color duration-300 ease-in-out text-(--ui-second) hover:text-(--ui-cancel)" @click="emits('remove')" />
    </Flex>
</template>
