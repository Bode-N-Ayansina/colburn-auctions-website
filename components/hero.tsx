import { CalendarDays, ArrowRight, Gavel } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <img
          src="/hero-gallery.png"
          alt="Interior of the Colburn Auctions gallery displaying fine art and antiques"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-tan/40 bg-primary-foreground/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-tan">
            <span className="size-1.5 rounded-full bg-tan" />
            Fine Art, Antiques &amp; Estate Auctions
          </span>

          <h1 className="mt-6 text-balance font-serif text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Connecticut&apos;s Premier Auction House
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            For over four decades, Colburn Auctions has connected discerning
            collectors with exceptional works of art, rare antiques, and
            distinguished estate collections&mdash;both in the gallery and online.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-tan text-tan-foreground hover:bg-tan/90"
            >
              <Gavel className="size-4" aria-hidden="true" />
              Bid Online
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              View Upcoming Auctions
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="lg:col-span-4 lg:self-end">
          <div className="rounded-lg border border-tan/30 bg-primary-foreground/5 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-tan">
              <CalendarDays className="size-4" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Next Live Auction
              </span>
            </div>
            <p className="mt-4 font-serif text-3xl font-bold">
              March 22, 2026
            </p>
            <p className="mt-1 text-sm text-primary-foreground/70">
              10:00 AM EST &middot; Fine Art &amp; American Antiques
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-tan/20 pt-5 text-center">
              <div>
                <p className="font-serif text-2xl font-bold text-tan">418</p>
                <p className="text-xs uppercase tracking-wide text-primary-foreground/60">
                  Lots
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-tan">Preview</p>
                <p className="text-xs uppercase tracking-wide text-primary-foreground/60">
                  Mar 18&ndash;21
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
