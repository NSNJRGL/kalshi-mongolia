"use client"

import Link from "next/link"

import {
  Search01Icon,
  Notification03Icon,
  UserIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/providers/language-provider"
import { getHomepageContent } from "@/lib/mock-market-data"
import { cn } from "@/lib/utils"

export function Header() {
  const { language } = useLanguage()
  const content = getHomepageContent(language)

  return (
    <header className="border-b border-white/10 bg-[rgba(10,10,10,0.88)] backdrop-blur-md">
      <div className="flex h-14 items-center justify-between">
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-[5px] bg-[#10b981] text-[13px] font-bold text-[#0a0a0a]">
              М
            </div>
            <span className="text-[17px] font-extrabold tracking-[-0.03em] text-[#ececec]">
              {content.brandName}
            </span>
          </Link>

          <nav className="hidden items-center gap-3 lg:flex">
            {content.primaryNavigation.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-1 text-[13px] tracking-[-0.01em] transition-colors",
                  index === 0 ? "font-semibold text-[#ececec]" : "text-[#8a8a8a] hover:text-[#ececec]"
                )}
              >
                <span>{item.label}</span>
                {item.count ? (
                  <Badge className="h-4 rounded-full bg-[#ef4444] px-[6px] text-[10px] font-medium text-white hover:bg-[#ef4444]">
                    {item.count}
                  </Badge>
                ) : null}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2.5">
          <label className="relative hidden lg:block">
            <HugeiconsIcon
              icon={Search01Icon}
              size={15}
              className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#767676]"
            />
            <Input
              type="search"
              placeholder={content.labels.headerSearchPlaceholder}
              className="h-9 w-64 rounded-[9px] border-white/10 bg-[#171717] pl-9 pr-3 text-[13px] text-[#ececec] placeholder:text-[#767676] shadow-none focus-visible:border-[#10b981]/60 focus-visible:ring-0"
              aria-label="Search markets"
            />
          </label>

          <Button className="h-8 rounded-[9px] bg-[#10b981] px-3 text-[13px] font-semibold text-black hover:bg-[#34d399]">
            {content.labels.depositCta}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="size-9 rounded-[9px] text-[#ececec] hover:bg-white/5 hover:text-white"
            aria-label="Notifications"
          >
            <HugeiconsIcon icon={Notification03Icon} size={15} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="size-9 rounded-[9px] text-[#ececec] hover:bg-white/5 hover:text-white"
            aria-label="Account"
          >
            <HugeiconsIcon icon={UserIcon} size={15} />
          </Button>
        </div>
      </div>

      <div className="flex h-[33px] items-center gap-4 overflow-x-auto border-t border-white/10 text-[12px]">
        {content.categoryNavigation.map((item) => (
          <Link
            key={item}
            href="#"
            className={cn(
              "shrink-0 font-medium text-[#8a8a8a] transition-colors hover:text-[#ececec]",
              item === content.activeCategoryNavigation && "text-[#10b981]"
            )}
          >
            {item}
          </Link>
        ))}
      </div>
    </header>
  )
}
