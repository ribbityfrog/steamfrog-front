<script setup lang="ts">

const props = defineProps({
    src: {
        type: Number,
        required: true
    }
})

</script>

<template>
    <Flex col center>
        <img :src="steamImgLink(props.src)" class="max-h-[80px]" @error="(e) => (e.target as HTMLImageElement).src = '/img/brand/logo.png'" >
    </Flex>
</template>
