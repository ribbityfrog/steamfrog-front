<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'

export type Menu = keyof typeof menus

const props = defineProps({
    menu: {
        type: String as PropType<Menu>,
        required: true
    },
    vertical: {
        type: Boolean,
        default: false
    },
    white: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'text-base'
    },
    mega: {
        type: Boolean,
        default: false
    },
    dropdown: {
        type: String,
        default: undefined
    }
})

const menus = {
    main: [{
        label: 'Home',
        to: '/',
    },
    {
        label: 'Stats',
        to: '/stats',
        children: [
            {
                label: 'Basics',
                to: '/stats'
            },
            {
                label: 'Brokens',
                to: '/stats/brokens'
            },
            {
                label: 'Finance',
                to: '/stats/finance'
            },
            // {
            //     label: 'Platforms',
            //     to: '/stats/platform'
            // },
            // {
            //     label: 'Dates',
            //     to: '/stats/dates'
            // },
        ],
    },
    {
        label: 'FAQ',
        to: '/faq',
    }],

    connected: [{
        label: 'Home',
        to: '/'
    }],

    account: [[{
        label: 'Profile',
        icon: 'i-lucide-circle-user',
        to: '/account/profile'
    }],[{
        label: 'Se déconnecter',
        icon: 'i-lucide-door-open',
        onSelect() { leAuth.logout() }
    }]],

    admin: [{
        label: 'Dashboard',
        to: '/admin'
    },
    {
        label: 'Users',
        to: '/admin/users'
    }]
} as const satisfies Record<string, NavigationMenuItem[] | DropdownMenuItem[]>

const ui = {
}

</script>

<template>
    <UDropdownMenu v-if="props.dropdown" :items="[...menus[props.menu]]" :ui="ui">
        <KitButton variant="link" color="second" base="light" :label="props.dropdown"/>
    </UDropdownMenu>
    <UNavigationMenu
        v-else
        :content-orientation="props.mega ? 'horizontal' : 'vertical'"
        :orientation="props.vertical ? 'vertical' : 'horizontal'"
        :items="[...menus[props.menu]]"
        :ui="ui" />
</template>

