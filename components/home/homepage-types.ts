import type {
  AllMarketItem,
  MarketItem,
  TopicItem,
} from "@/lib/mock-market-data"

export type FeaturedHeroProps = {
  items: MarketItem[]
}

export type MarketGridProps = {
  items: AllMarketItem[]
}

export type SideRailProps = {
  urgentItems: MarketItem[]
  topics: TopicItem[]
}
