import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const items = [
  {
    image: "/item-desk.png",
    lot: "Lot 112",
    title: "Federal Mahogany Secretary Desk",
    attribution: "American, circa 1795",
    estimateLow: "$8,000",
    estimateHigh: "$12,000",
  },
  {
    image: "/item-brooch.png",
    lot: "Lot 087",
    title: "Art Deco Diamond & Sapphire Brooch",
    attribution: "Platinum, circa 1925",
    estimateLow: "$15,000",
    estimateHigh: "$22,000",
  },
  {
    image: "/item-painting.png",
    lot: "Lot 204",
    title: "Hudson River School Landscape",
    attribution: "Oil on canvas, 19th century",
    estimateLow: "$25,000",
    estimateHigh: "$40,000",
  },
]

export function FeaturedItems() {
  return (
    <section id="featured" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Highlights
            </span>
            <h2 className="mt-3 text-balance font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Featured Lots
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              A curated preview of exceptional works crossing the block in our
              upcoming sales.
            </p>
          </div>
          <Button
            variant="outline"
            className="self-start border-primary/30 bg-transparent text-primary hover:bg-primary/5 md:self-auto"
          >
            Browse All Lots
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-tan/30">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-sm bg-primary/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground backdrop-blur">
                  {item.lot}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-bold leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm italic text-muted-foreground">
                  {item.attribution}
                </p>

                <div className="mt-auto flex items-end justify-between border-t border-border pt-5">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      Estimate
                    </p>
                    <p className="font-serif text-lg font-bold text-foreground">
                      {item.estimateLow} &ndash; {item.estimateHigh}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-secondary hover:bg-secondary/10 hover:text-secondary"
                  >
                    Details
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
