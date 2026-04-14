"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { getHomepageContent } from "@/lib/mock-market-data"

import { AllMarkets } from "./all-markets"
import { FeaturedHero } from "./featured-hero"
import { SideRail } from "./side-rail"

export function HomepageShell() {
  const { language } = useLanguage()
  const content = getHomepageContent(language)

  return (
    <>
      <main className="pb-24 pt-6">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.78fr)]">
          <FeaturedHero
            title={content.labels.featuredTitle}
            description={content.labels.featuredDescription}
            probabilityLabel={content.labels.probability}
            volumeLabel={content.labels.volume}
            items={content.featuredMarkets}
          />
          <SideRail
            urgentTitle={content.labels.urgentNews}
            hotTopicsTitle={content.labels.hotTopics}
            urgentItems={content.urgentNews}
            topics={content.hotTopics}
          />
        </div>

        <AllMarkets
          key={content.language}
          title={content.labels.allMarkets}
          searchPlaceholder={content.labels.marketSearchPlaceholder}
          searchLabel={content.labels.marketSearchLabel}
          filters={content.marketFilters}
          allFilterLabel={content.allFilterLabel}
          matchingMarketsLabel={content.labels.matchingMarkets}
          yesLabel={content.labels.yes}
          noLabel={content.labels.no}
          loadMoreLabel={content.labels.loadMore}
          noMarketsTitle={content.labels.noMarketsTitle}
          noMarketsDescription={content.labels.noMarketsDescription}
          clearFiltersLabel={content.labels.clearFilters}
          resetFiltersLabel={content.labels.resetMarketFilters}
          marketTickerLabel={content.labels.marketTicker}
          liveLabel={content.labels.live}
          spreadAndTotalLabel={content.labels.spreadAndTotal}
          marketCountLabel={content.labels.twoMarkets}
          items={content.allMarkets}
        />
      </main>
    </>
  )
}
