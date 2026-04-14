import { ArrowDown01Icon, ArrowRight01Icon, FireIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Card } from "@/components/ui/card"

import type { SideRailProps } from "./homepage-types"

function TrendLabel({
  value,
  direction,
}: {
  value: string
  direction: "up" | "down"
}) {
  return (
    <div
      className={`inline-flex items-center gap-1 text-xs ${
        direction === "up" ? "text-[#10b981]" : "text-[#ef4444]"
      }`}
    >
      <HugeiconsIcon
        icon={direction === "up" ? FireIcon : ArrowDown01Icon}
        size={10}
        strokeWidth={2}
      />
      <span className="font-semibold">{value}</span>
    </div>
  )
}

export function SideRail({ urgentItems, topics }: SideRailProps) {
  return (
    <aside className="space-y-6">
      <Card className="rounded-2xl border-white/10 bg-[#111111] px-[17px] py-[17px] shadow-none">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold tracking-[-0.01em] text-[#e5e5e5]">
            Яаралтай мэдээ
          </h3>
          <HugeiconsIcon icon={ArrowRight01Icon} size={12} className="text-[#888]" />
        </div>

        <div className="mt-9 space-y-3">
          {urgentItems.map((item, index) => (
            <div key={item.id} className="flex gap-2">
              <span className="w-4 pt-0.5 text-xs font-medium text-[#888]">
                {index + 1}
              </span>
              <div className="min-w-0">
                <p className="text-xs leading-[15px] text-[#e5e5e5]">{item.question}</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-base font-bold leading-6 text-[#e5e5e5]">
                    {item.probability}%
                  </span>
                  <TrendLabel value={item.trendValue} direction={item.trendDirection} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="rounded-2xl border-white/10 bg-[#111111] px-[17px] py-[17px] shadow-none">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold tracking-[-0.01em] text-[#e5e5e5]">
            Халуун сэдвүүд
          </h3>
          <HugeiconsIcon icon={ArrowRight01Icon} size={12} className="text-[#888]" />
        </div>

        <div className="mt-9 space-y-2">
          {topics.map((topic, index) => (
            <div
              key={topic.id}
              className="flex items-center gap-2 rounded-xl px-1.5 py-1"
            >
              <span className="w-4 text-xs font-medium text-[#888]">{index + 1}</span>
              <div className="flex size-7 items-center justify-center rounded bg-[#1f1f1f] text-sm text-[#e5e5e5]">
                {topic.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium leading-4 text-[#e5e5e5]">
                  {topic.label}
                </p>
                <p className="text-[10px] leading-[15px] text-[#888]">{topic.volume}</p>
              </div>
              <span className={topic.trendDirection === "up" ? "text-[#10b981]" : "text-[#ef4444]"}>
                {topic.trendDirection === "up" ? "🔥" : "↓"}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </aside>
  )
}
