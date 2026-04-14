"use client"

import Link from "next/link"

import { useLanguage } from "@/components/providers/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getHomepageContent } from "@/lib/mock-market-data"
import { cn } from "@/lib/utils"

export function Footer() {
  const { language, setLanguage } = useLanguage()
  const content = getHomepageContent(language)

  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="px-4 py-12 md:px-4">
        <div className="grid gap-10 xl:grid-cols-[repeat(5,minmax(0,1fr))_224px]">
          {content.footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold text-[#e5e5e5]">{column.title}</h3>
              <ul className="mt-9 space-y-4">
                {column.items.map((item) => (
                  <li key={item.label} className="text-sm text-[#888]">
                    {item.href ? (
                      <Link href={item.href} className="transition-colors hover:text-[#e5e5e5]">
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-bold text-[#e5e5e5]">{content.labels.community}</h3>
            <ul className="mt-9 space-y-3">
              {content.socialLinks.map((item) => (
                <li key={item.label} className="text-sm text-[#888]">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-[#e5e5e5]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-[#e5e5e5]">{content.labels.newsletter}</h3>
            <p className="mt-9 max-w-[204px] text-sm leading-5 text-[#888]">
              {content.labels.newsletterDescription}
            </p>

            <div className="mt-4 space-y-2">
              <Input
                placeholder={content.labels.emailPlaceholder}
                className="h-9 rounded-xl border-white/10 bg-[#111111] text-sm text-[#e5e5e5] placeholder:text-[#666] focus-visible:border-[#10b981]/60 focus-visible:ring-0"
              />
              <Button className="h-9 w-full rounded-xl bg-[#10b981] text-sm font-semibold text-[#0a0a0a] hover:bg-[#34d399]">
                {content.labels.subscribe}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-[#10b981] text-sm font-bold text-[#0a0a0a]">
                  М
                </div>
                <span className="text-[18px] font-bold tracking-[-0.02em] text-[#e5e5e5]">
                  {content.brandName}
                </span>
              </div>
              <p className="text-sm text-[#666]">{content.labels.copyright}</p>
            </div>

            <div className="flex gap-4">
              <Button
                variant="ghost"
                aria-pressed={language === "mn"}
                onClick={() => setLanguage("mn")}
                className={cn(
                  "h-8 rounded-lg px-3 text-sm text-[#e5e5e5] hover:bg-[#111111]",
                  language === "mn" && "bg-[#111111]"
                )}
              >
                🇲🇳 {content.labels.mongolian}
              </Button>
              <Button
                variant="ghost"
                aria-pressed={language === "en"}
                onClick={() => setLanguage("en")}
                className={cn(
                  "h-8 rounded-lg px-3 text-sm text-[#e5e5e5] hover:bg-[#111111]",
                  language === "en" && "bg-[#111111]"
                )}
              >
                🇺🇸 {content.labels.english}
              </Button>
            </div>
          </div>

          <p className="mx-auto mt-10 max-w-[896px] text-center text-sm leading-6 text-[#666]">
            {content.labels.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
