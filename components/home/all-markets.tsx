"use client"

import { useDeferredValue, useState } from "react"

import { Search01Icon, SlidersHorizontalIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import type { AllMarketItem } from "@/lib/mock-market-data"
import { cn } from "@/lib/utils"

import type { MarketGridProps } from "./homepage-types"

const INITIAL_MARKET_COUNT = 8
const LOAD_MORE_COUNT = 4

export function AllMarkets({
  items,
  title,
  searchPlaceholder,
  filters,
  allFilterLabel,
  matchingMarketsLabel,
  yesLabel,
  noLabel,
  loadMoreLabel,
  noMarketsTitle,
  noMarketsDescription,
  clearFiltersLabel,
}: MarketGridProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState(allFilterLabel)
  const [visibleCount, setVisibleCount] = useState(INITIAL_MARKET_COUNT)
  const deferredQuery = useDeferredValue(searchQuery)

  const normalizedQuery = deferredQuery.trim().toLowerCase()
  const filteredItems = items.filter((item) => {
    const matchesFilter = selectedFilter === allFilterLabel || item.category === selectedFilter

    if (!matchesFilter) {
      return false
    }

    if (!normalizedQuery) {
      return true
    }

    return [item.question, item.category, item.volume]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery)
  })
  const visibleItems = filteredItems.slice(0, visibleCount)
  const canLoadMore = visibleCount < filteredItems.length

  function handleFilterChange(filter: string) {
    setSelectedFilter(filter)
    setVisibleCount(INITIAL_MARKET_COUNT)
  }

  function handleSearchChange(value: string) {
    setSearchQuery(value)
    setVisibleCount(INITIAL_MARKET_COUNT)
  }

  function resetFilters() {
    setSearchQuery("")
    setSelectedFilter(allFilterLabel)
    setVisibleCount(INITIAL_MARKET_COUNT)
  }

  return (
    <section id="markets" className="pt-14">
      <h2 className="text-[22px] font-extrabold tracking-[-0.035em] text-[#ececec]">
        {title}
      </h2>

      <div className="mt-8 flex flex-col gap-5">
        <div className="flex flex-col gap-3 lg:w-fit">
          <div className="flex gap-3">
            <div className="relative min-w-0 flex-1 lg:w-[391px]">
              <HugeiconsIcon
                icon={Search01Icon}
                size={16}
                className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-[#666]"
              />
              <Input
                value={searchQuery}
                onChange={(event) => handleSearchChange(event.target.value)}
                placeholder={searchPlaceholder}
                className="h-10 rounded-[10px] border-white/10 bg-[#111111] pl-10 pr-3 text-[13px] text-[#ececec] placeholder:text-[#767676] focus-visible:border-[#10b981]/60 focus-visible:ring-0"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="size-10 rounded-[10px] border-white/10 bg-[#111111] text-[#8a8a8a] hover:bg-[#181818] hover:text-[#ececec]"
              onClick={resetFilters}
              aria-label="Reset market filters"
            >
              <HugeiconsIcon icon={SlidersHorizontalIcon} size={16} />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilterChange(filter)}
              >
                <Badge
                  className={cn(
                    "h-8 rounded-[10px] px-3 text-[13px] font-semibold",
                    selectedFilter === filter
                      ? "bg-[#10b981] text-[#0a0a0a] hover:bg-[#10b981]"
                      : "bg-[#171717] text-[#ececec] hover:bg-[#171717]"
                  )}
                >
                  {filter}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <>
            <p className="text-[12px] text-[#767676]">
              {filteredItems.length} {matchingMarketsLabel}
              {selectedFilter !== allFilterLabel ? ` • ${selectedFilter}` : ""}
            </p>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {visibleItems.map((item) => (
                <MarketCard
                  key={item.id}
                  item={item}
                  yesLabel={yesLabel}
                  noLabel={noLabel}
                />
              ))}
            </div>
          </>
        ) : (
          <Card className="rounded-[16px] border-white/10 bg-[#111111] px-6 py-10 text-center shadow-none">
            <h3 className="text-base font-semibold text-[#ececec]">
              {noMarketsTitle}
            </h3>
            <p className="mt-2 text-sm text-[#8a8a8a]">{noMarketsDescription}</p>
            <div className="mt-5 flex justify-center">
              <Button
                variant="outline"
                onClick={resetFilters}
                className="h-9 rounded-[10px] border-white/10 bg-transparent px-4 text-sm text-[#ececec] hover:bg-[#111111]"
              >
                {clearFiltersLabel}
              </Button>
            </div>
          </Card>
        )}

        {canLoadMore ? (
          <div className="flex justify-center pt-4">
            <Button
              variant="outline"
              onClick={() =>
                setVisibleCount((currentCount) => currentCount + LOAD_MORE_COUNT)
              }
              className="h-10 rounded-[10px] border-white/10 bg-transparent px-6 text-[13px] font-semibold text-[#ececec] hover:bg-[#111111]"
            >
              {loadMoreLabel}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}

function MarketCard({
  item,
  yesLabel,
  noLabel,
}: {
  item: AllMarketItem
  yesLabel: string
  noLabel: string
}) {
  const outcomeRows = [
    {
      label: yesLabel,
      value: item.yes,
      accent: "bg-[#ef4444]",
      icon: item.icon,
    },
    {
      label: noLabel,
      value: item.no,
      accent: "bg-[#3b82f6]",
      icon: item.icon,
    },
  ]

  return (
    <Card className="rounded-[20px] border-white/10 bg-[#111111] px-[18px] py-[18px] shadow-none">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex size-9 items-center justify-center rounded-full bg-gradient-to-br text-base text-[#f5f5f5]",
                item.iconClassName
              )}
            >
              {item.icon}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9b9b9b]">
                {item.category}
              </span>
            </div>
          </div>

          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5f5f68]">
            MKT
          </span>
        </div>

        <p className="mt-5 min-h-[58px] text-[17px] leading-[1.25] font-extrabold tracking-[-0.03em] text-[#ececec]">
          {item.question}
        </p>

        <div className="mt-2 flex items-center gap-2 text-[12px] text-[#8a8a8a]">
          <span className="size-2 rounded-full bg-[#ef476f]" />
          <span className="font-semibold text-[#ef476f]">LIVE</span>
          <span>·</span>
          <span>{item.trendValue}</span>
        </div>

        <div className="mt-7 space-y-4">
          {outcomeRows.map((outcome) => (
            <div key={outcome.label} className="flex items-center gap-3">
              <div
                className={cn(
                  "flex size-9 items-center justify-center rounded-full bg-gradient-to-br text-sm text-[#f5f5f5]",
                  item.iconClassName
                )}
              >
                {outcome.icon}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-medium text-[#e5e5e5]">
                      {outcome.label}
                    </p>
                    <div className={cn("mt-2 h-[2px] w-28 rounded-full", outcome.accent)} />
                  </div>

                  <div className="flex shrink-0 items-center">
                    <div className="flex h-11 min-w-[108px] items-center justify-center rounded-full border border-[#2cbf8c] px-5 text-[14px] font-bold tabular-nums text-[#ececec]">
                      {outcome.value}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 flex items-center justify-between gap-4 text-[12px] text-[#8a8a8a]">
          <span>{item.volume}</span>
          <div className="flex items-center gap-4">
            <span>Spread and Total</span>
            <span>2 markets</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
