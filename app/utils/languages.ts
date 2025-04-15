export const languagesAvailable = ['fr', 'en'] as const
export type LanguageCode = typeof languagesAvailable[number]
