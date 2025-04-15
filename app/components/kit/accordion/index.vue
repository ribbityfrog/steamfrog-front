<script setup lang="ts">
import { getCurrentInstance } from 'vue'

const instance = getCurrentInstance()

</script>

<template>
    <UAccordion>
        <template v-for="(slotFn, slotName) in instance?.slots" #[slotName]="slotProps">
            <slot :name="slotName" v-bind="slotProps || {}" />
        </template>
    </UAccordion>
</template>
