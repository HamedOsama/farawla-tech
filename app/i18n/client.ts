'use client'

import i18next, { Namespace, KeyPrefix } from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg, UseTranslationOptions, UseTranslationResponse } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { getOptions } from './settings'

i18next
  .use(initReactI18next)
  .use(resourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
  .init(getOptions())

export function useTranslation<N extends Namespace, TKPrefix extends KeyPrefix<N> = undefined>(
  lng: string,
  ns?: N | Readonly<N>,
  options?: UseTranslationOptions<TKPrefix>
): UseTranslationResponse<N, TKPrefix> {
  if (i18next.resolvedLanguage !== lng) i18next.changeLanguage(lng)
  return useTranslationOrg(ns, options)
}