import { AllMarkets } from "@/components/home/all-markets"
import { FeaturedHero } from "@/components/home/featured-hero"
import { Footer } from "@/components/home/footer"
import { SideRail } from "@/components/home/side-rail"
import { Header } from "@/components/containers/header/header"
import { MainLayout } from "@/components/containers/layout/main-layout"
import {
  allMarkets,
  featuredMarkets,
  hotTopics,
  urgentNews,
} from "@/lib/mock-market-data"

export default function Page() {
  return (
    <MainLayout>
      <Header />

      <main className="pb-24 pt-6">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,994px)_485px]">
          <FeaturedHero items={featuredMarkets} />
          <SideRail urgentItems={urgentNews} topics={hotTopics} />
        </div>

        <AllMarkets items={allMarkets} />
      </main>

      <Footer />
    </MainLayout>
  )
}
