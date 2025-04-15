<script setup lang="ts">

const props = defineProps({
    italic: {
        type: Boolean,
        default: false
    }
})

const classText = `${props.italic ? 'italic' : ''}`

</script>

<template>
    <Flex col center>
        <p :class="classText">An issue ? A question ?</p>
        <Flex center >
            <KitLink to="mailto:contact@steamfrog.net" tab>contact@steamfrog.net</KitLink>
        </Flex>
    </Flex>
</template>
