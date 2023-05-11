export const fallbackLng = 'ar'
export const languages = ['ar', 'en']

export const defaultNS = 'translation'

export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}