<script setup lang="ts">

const props = defineProps({
    second: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <span :class="`font-medium ${props.second ? 'text-(--ui-second)' : 'text-(--ui-primary)'}`">
        <slot/>
    </span>
</template>
