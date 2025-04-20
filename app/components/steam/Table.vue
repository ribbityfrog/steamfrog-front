<script setup lang="ts">

type SteamColumn = keyof typeof tmplColumns

const data = defineModel<any[]>({ required: true })

const props = defineProps({
    columns: {
        type: Array as PropType<readonly SteamColumn[]>,
        required: true
    }
})

const tmplColumns = {
    banner: {
        id: 'banner',
    },
    id: {
        accessorKey: 'id',
        header: '#',
        sortable: true
    },
    releaseDate: {
        id: 'release',
        accessorKey: 'release.date',
        header: 'Release date',
        date: true,
        sortable: true
    },
    name: {
        accessorKey: 'name',
        header: 'Name',
        sortable: true
    },
    isFree: {
        accessorKey: 'is_free',
        header: 'Free',
        bool: true,
        sortable: true
    },
    priceFinal: {
        id: 'priceFinal',
        accessorKey: 'pricing.priceFinal',
        header: 'Current price',
        price: true,
        sortable: true
    },
    priceInitial: {
        id: 'priceInitial',
        accessorKey: 'pricing.priceInitial',
        header: 'Original price',
        price: true,
        sortable: true
    },
}

const selectedColumns = props.columns.reduce<any[]>((acc, curr) => {
    acc.push(tmplColumns[curr])
    return acc
}, [])

</script>

<template>
    <KitTable v-model="data" :columns="selectedColumns" sticky v-bind="$attrs">
        <template v-if="props.columns.includes('banner')" #banner-cell="{ row }">
            <SteamImg :src="+row.original.id" />
        </template>
        <template v-if="props.columns.includes('name')" #name-cell="{ row }">
            <KitLink :to="steamAppLink(row.original.id)" tab>{{ row.original.name }}</KitLink>
        </template>
    </KitTable>
</template>
