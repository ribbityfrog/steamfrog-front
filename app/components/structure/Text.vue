<script setup lang="ts">

const props = defineProps({
    center: {
        type: Boolean,
        default: false
    },
    right: {
        type: Boolean,
        default: false
    }
})

let align = ''
if (props.center) 
    align = 'text-center'
else if (props.right)
    align = 'text-right'

</script>

<template>
    <div :class="`${align} space-y-1`">
        <slot/>
    </div>
</template>
