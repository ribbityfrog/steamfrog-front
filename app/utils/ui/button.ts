export type Base = 'fat' | 'medium' | 'light'
export type Variant = 'default' | 'invert' | 'link'
export type Color = 'primary' | 'second' | 'confirm' | 'cancel'

export const bases = {
    light: 'text-lg font-medium py-0.5 px-2',
    medium: 'text-lg font-semibold py-1 px-3',
    fat: 'text-2xl font-bold py-1.5 px-4'
} satisfies Record<Base, string>

export const variants = {
    default: 'border-2 text-(--ui-darkness) disabled:text-(--ui-darkness) hover:bg-transparent',
    invert: 'border-2 bg-transparent disabled:text-(--ui-darkness) hover:text-(--ui-darkness)',
    link: 'm-0 p-0 bg-transparent hover:bg-transparent hover:underline'
} satisfies Record<Variant, string>

export const colors = {
    default: {
        primary: 'bg-(--ui-primary) border-(--ui-primary) hover:text-(--ui-primary)',
        second: 'bg-(--ui-second) border-(--ui-second) hover:text-(--ui-second)',
        confirm: 'bg-(--ui-confirm) border-(--ui-confirm) hover:text-(--ui-confirm)',
        cancel: 'bg-(--ui-cancel) border-(--ui-cancel) hover:text-(--ui-cancel)'
    },
    invert: {
        primary: 'hover:bg-(--ui-primary) border-(--ui-primary) text-(--ui-primary)',
        second: 'hover:bg-(--ui-second) border-(--ui-second) text-(--ui-second)',
        confirm: 'hover:bg-(--ui-confirm) border-(--ui-confirm) text-(--ui-confirm)',
        cancel: 'hover:bg-(--ui-cancel) border-(--ui-cancel) text-(--ui-cancel)'
    },
    link: {
        primary: 'text-(--ui-primary)',
        second: 'text-(--ui-second)',
        confirm: 'text-(--ui-confirm)',
        cancel: 'text-(--ui-cancel)'
    }
} satisfies Record<Variant, Record<Color, string>>
