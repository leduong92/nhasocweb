import 'server-only'
import { i18n, type Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  vi: () => import('@/dictionaries/vi.json').then(module => module.default),
  cn: () => import('@/dictionaries/cn.json').then(module => module.default),
}

// export const getDictionary = async (locale: Locale) => (dictionaries as any)[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()
export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en()
