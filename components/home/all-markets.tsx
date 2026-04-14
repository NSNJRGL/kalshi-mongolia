import { Search01Icon, SlidersHorizontalIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { marketFilters } from "@/lib/mock-market-data"
import { cn } from "@/lib/utils"

import type { MarketGridProps } from "./homepage-types"

function OutcomeBlock({
  label,
  value,
  tone,
}: {
  label: string
  value: number
  tone: "yes" | "no"
}) {
  return (
    <div
      className={cn(
        "flex-1 rounded-xl border px-[7px] py-[7px]",
        tone === "yes"
          ? "border-[#1e3b2f] bg-[#12281f]"
          : "border-[#4a2525] bg-[#2a1717]"
      )}
    >
      <p className="text-[9px] leading-[13.5px] text-[#888]">{label}</p>
      <p
        className={cn(
          "text-base leading-4 font-semibold",
          tone === "yes" ? "text-[#48bb78]" : "text-[#ef4444]"
        )}
      >
        {value}%
      </p>
    </div>
  )
}

export function AllMarkets({ items }: MarketGridProps) {
  return (
    <section id="markets" className="pt-14">
      <h2 className="text-[20px] font-bold tracking-[-0.03em] text-[#e5e5e5]">
        Бүх зах зээлүүд
      </h2>

      <div className="mt-8 flex flex-col gap-6">
        <div className="flex flex-col gap-3 lg:w-fit">
          <div className="flex gap-3">
            <div className="relative min-w-0 flex-1 lg:w-[391px]">
              <HugeiconsIcon
                icon={Search01Icon}
                size={16}
                className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#666]"
              />
              <Input
                placeholder="Зах зээл хайх..."
                className="h-10 rounded-xl border-white/10 bg-[#111111] pl-10 pr-3 text-[13px] text-[#e5e5e5] placeholder:text-[#666] focus-visible:border-[#10b981]/60 focus-visible:ring-0"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="size-10 rounded-xl border-white/10 bg-[#111111] text-[#888] hover:bg-[#181818] hover:text-[#e5e5e5]"
            >
              <HugeiconsIcon icon={SlidersHorizontalIcon} size={16} />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {marketFilters.map((filter, index) => (
              <Badge
                key={filter}
                className={cn(
                  "h-8 rounded-xl px-3 text-sm font-semibold",
                  index === 0
                    ? "bg-[#10b981] text-[#0a0a0a] hover:bg-[#10b981]"
                    : "bg-[#1f1f1f] text-[#e5e5e5] hover:bg-[#1f1f1f]"
                )}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <Card
              key={item.id}
              className="rounded-2xl border-white/10 bg-[#111111] px-[13px] py-[13px] shadow-none"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div
                    className={cn(
                      "flex size-8 items-center justify-center rounded-lg bg-gradient-to-br text-sm text-[#e5e5e5]",
                      item.iconClassName
                    )}
                  >
                    {item.icon}
                  </div>
                  <Badge className="h-[19.5px] rounded-[10px] bg-[#1a1a1a] px-[7px] text-[9px] font-medium text-[#e5e5e5] hover:bg-[#1a1a1a]">
                    {item.category}
                  </Badge>
                </div>

                <p className="mt-8 min-h-[60px] text-xs font-medium leading-[15px] text-[#e5e5e5]">
                  {item.question}
                </p>

                <div className="mt-9 flex gap-1.5">
                  <OutcomeBlock label="Тийм" value={item.yes} tone="yes" />
                  <OutcomeBlock label="Үгүй" value={item.no} tone="no" />
                </div>

                <p className="mt-4 text-[10px] leading-[15px] text-[#666]">{item.volume}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <Button
            variant="outline"
            className="h-10 rounded-xl border-white/10 bg-transparent px-6 text-sm font-semibold text-[#e5e5e5] hover:bg-[#111111]"
          >
            Цааш ачаалах
          </Button>
        </div>
      </div>
    </section>
  )
}
