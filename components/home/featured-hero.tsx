import { ArrowUpRightIcon, ArrowDownRightIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

import type { FeaturedHeroProps } from "./homepage-types"

function TrendPill({
  direction,
  value,
  compact = false,
}: {
  direction: "up" | "down"
  value: string
  compact?: boolean
}) {
  const icon = direction === "up" ? ArrowUpRightIcon : ArrowDownRightIcon

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 text-[#10b981]",
        direction === "down" && "text-[#ef4444]",
        compact ? "text-[10px] leading-[15px]" : "text-xs leading-4"
      )}
    >
      <HugeiconsIcon icon={icon} size={compact ? 10 : 12} strokeWidth={2} />
      <span className="font-semibold">{value}</span>
    </div>
  )
}

function MarketIcon({
  icon,
  className,
  size = "default",
}: {
  icon: string
  className: string
  size?: "default" | "sm"
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl bg-gradient-to-br text-[#e5e5e5]",
        size === "default" ? "size-16 text-3xl" : "size-10 text-lg",
        className
      )}
    >
      <span>{icon}</span>
    </div>
  )
}

export function FeaturedHero({
  items,
  title,
  description,
  probabilityLabel,
  volumeLabel,
}: FeaturedHeroProps) {
  const [lead, ...secondary] = items

  return (
    <section className="w-full">
      <div className="mb-4">
        <h2 className="text-[20px] font-bold tracking-[-0.03em] text-[#e5e5e5]">
          {title}
        </h2>
        <p className="mt-0.5 text-sm text-[#888]">{description}</p>
      </div>

      <div className="grid gap-3">
        <Card className="rounded-2xl border-white/10 bg-[#111111] px-[17px] py-[17px] shadow-none">
          <div className="flex items-start gap-4">
            <MarketIcon icon={lead.icon} className={lead.iconClassName} />
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex items-center gap-2">
                <Badge className="h-[21px] rounded-[10px] bg-[#1a1a1a] px-[9px] text-[10px] font-medium text-[#e5e5e5] hover:bg-[#1a1a1a]">
                  {lead.category}
                </Badge>
                <TrendPill direction={lead.trendDirection} value={lead.trendValue} />
              </div>

              <h3 className="mt-[7px] text-base font-bold tracking-[-0.02em] text-[#e5e5e5]">
                {lead.question}
              </h3>

              <div className="mt-3 flex items-end justify-between">
                <div className="flex items-end gap-2">
                  <span className="text-[30px] leading-9 font-bold tracking-[0.01em] text-[#e5e5e5]">
                    {lead.probability}%
                  </span>
                  <span className="pb-1 text-xs text-[#888]">{probabilityLabel}</span>
                </div>

                <div className="text-right">
                  <p className="text-xs text-[#888]">{volumeLabel}</p>
                  <p className="text-sm font-semibold text-[#e5e5e5]">{lead.volume}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid gap-3 md:grid-cols-2">
          {secondary.map((item) => (
            <Card
              key={item.id}
              className="rounded-2xl border-white/10 bg-[#111111] px-[13px] py-[13px] shadow-none"
            >
              <div className="flex h-full flex-col gap-9">
                <div className="flex items-start gap-3">
                  <MarketIcon icon={item.icon} className={item.iconClassName} size="sm" />

                  <div className="flex min-w-0 flex-1 flex-col">
                    <Badge className="mb-1 h-[19.5px] w-fit rounded-[10px] bg-[#1a1a1a] px-[7px] text-[9px] font-medium text-[#e5e5e5] hover:bg-[#1a1a1a]">
                      {item.category}
                    </Badge>
                    <TrendPill
                      direction={item.trendDirection}
                      value={item.trendValue}
                      compact
                    />
                  </div>
                </div>

                <p className="text-xs font-medium leading-[15px] text-[#e5e5e5]">
                  {item.question}
                </p>

                <div className="mt-auto flex items-end justify-between">
                  <span className="text-[20px] leading-7 font-bold tracking-[-0.03em] text-[#e5e5e5]">
                    {item.probability}%
                  </span>
                  <div className="text-right">
                    <p className="text-[9px] leading-[13.5px] text-[#888]">{volumeLabel}</p>
                    <p className="text-[10px] leading-[15px] font-semibold text-[#e5e5e5]">
                      {item.volume}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
