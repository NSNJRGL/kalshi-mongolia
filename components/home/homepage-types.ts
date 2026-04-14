import type {
  AllMarketItem,
  MarketItem,
  TopicItem,
} from "@/lib/mock-market-data"

export type FeaturedHeroProps = {
  title: string
  description: string
  probabilityLabel: string
  volumeLabel: string
  items: MarketItem[]
}

export type MarketGridProps = {
  title: string
  searchPlaceholder: string
  searchLabel: string
  filters: readonly string[]
  allFilterLabel: string
  matchingMarketsLabel: string
  yesLabel: string
  noLabel: string
  loadMoreLabel: string
  noMarketsTitle: string
  noMarketsDescription: string
  clearFiltersLabel: string
  resetFiltersLabel: string
  marketTickerLabel: string
  liveLabel: string
  spreadAndTotalLabel: string
  marketCountLabel: string
  items: AllMarketItem[]
}

export type SideRailProps = {
  urgentTitle: string
  hotTopicsTitle: string
  urgentItems: MarketItem[]
  topics: TopicItem[]
}
