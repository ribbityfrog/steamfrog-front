export default defineAppConfig({
    ui: {
        colors: {
            primary: 'slate',
            second: 'slateSecond',
            darkness: 'slateDark',
            confirm: 'slateConfirm',
            cancel: 'slateCancel',
            error: 'slateCancel',
        },
        navigationMenu: {
            slots: {
                link: 'text-lg'
            }
        },
        dropdownMenu: {
            slots: {
                item: 'cursor-pointer'
            }
        },
        modal: {
            slots: {
                overlay: 'fixed inset-0 bg-(--ui-bg)/85',
                title: 'text-lg text-(--ui-text) font-medium',
                close: 'absolute top-4 end-4 cursor-pointer'
            }
        },
        slideover: {
            slots: {
                content: '!w-fit',
            }
        },
        input: {
            slots: {
                base: 'placeholder:italic',
            }
        },
        table: {
            slots: {
                td: 'text-(--ui-text-dimmed)',
            }
        },
        // horizontalNavigation: {
        //     base: 'px-2.5 py-2 text-lg',
        //     before: 'hover:before:bg-slate-hover',
        //     after: 'after:inset-y-6 after:inset-x-2'
        // },
        // formGroup: {
        //     label: {
        //         base: ''
        //     },
        //     error: 'text-red-400'
        // },
        // textarea: {
        //     base: 'placeholder:italic',
        //     // rounded: 'rounded-none',
        //     variant: {
        //         outline: 'bg-transparent dark:bg-transparent',
        //     }
        // }
    }
})
