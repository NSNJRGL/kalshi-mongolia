import type { Language } from "@/lib/mock-market-data"

export const DEFAULT_LANGUAGE: Language = "en"
export const LANGUAGE_COOKIE_KEY = "ulaan-market-language"
export const LANGUAGE_STORAGE_KEY = "ulaan-market-language"

export function isLanguage(value: string | null | undefined): value is Language {
  return value === "en" || value === "mn"
}

export function getLanguageOrDefault(value: string | null | undefined): Language {
  return isLanguage(value) ? value : DEFAULT_LANGUAGE
}
