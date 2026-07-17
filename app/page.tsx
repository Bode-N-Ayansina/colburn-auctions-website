import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { UpcomingAuctions } from "@/components/upcoming-auctions"
import { FeaturedItems } from "@/components/featured-items"
import { LiveBanner } from "@/components/live-banner"
import { Categories } from "@/components/categories"
import { AboutAuctioneer } from "@/components/about-auctioneer"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <UpcomingAuctions />
        <FeaturedItems />
        <LiveBanner />
        <Categories />
        <AboutAuctioneer />
      </main>
      <SiteFooter />
    </div>
  )
}
