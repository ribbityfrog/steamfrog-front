import { joinURL } from 'ufo'
import type { ProviderGetImage } from '@nuxt/image'
import { createOperationsGenerator } from '#image'

const operationsGenerator = createOperationsGenerator()

export const getImage: ProviderGetImage = ( src, { modifiers = {}, baseURL } = {}) => {
    if (!baseURL)
        baseURL = useRuntimeConfig().public.imageProvider
    const operations = operationsGenerator(modifiers)
    return {
        url: joinURL(baseURL, src + (operations ? '?' + operations : '')),
    }
}
