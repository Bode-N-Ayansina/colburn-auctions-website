import { Radio, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LiveBanner() {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 md:flex-row md:justify-between md:px-6 md:py-20">
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:gap-6 md:text-left">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-secondary-foreground/10 ring-1 ring-secondary-foreground/20">
            <Radio className="size-6" aria-hidden="true" />
          </span>
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-tan">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-tan opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-tan" />
              </span>
              Bidding Live Now
            </span>
            <h2 className="mt-2 text-balance font-serif text-3xl font-bold md:text-4xl">
              Bid Live Online, From Anywhere
            </h2>
            <p className="mt-2 max-w-xl text-pretty leading-relaxed text-secondary-foreground/80">
              Follow the auctioneer in real time, place instant bids, and win
              from the comfort of your home with our live streaming platform.
            </p>
          </div>
        </div>

        <Button
          size="lg"
          className="shrink-0 bg-tan text-tan-foreground hover:bg-tan/90"
        >
          Join Live
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  )
}
