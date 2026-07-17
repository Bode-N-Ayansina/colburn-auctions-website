import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const auctions = [
  {
    date: "Mar 22",
    year: "2026",
    title: "Fine Art & American Antiques",
    description:
      "A distinguished selection of 18th & 19th-century American furniture, Hudson River School paintings, and period decorative arts.",
    lots: 418,
    location: "Litchfield Gallery",
    status: "Registering",
  },
  {
    date: "Apr 12",
    year: "2026",
    title: "Estate Jewelry & Timepieces",
    description:
      "Signed jewels, natural gemstones, and collectible wristwatches from several prominent Connecticut estates.",
    lots: 265,
    location: "Online & Gallery",
    status: "Cataloging",
  },
  {
    date: "May 03",
    year: "2026",
    title: "The Greenwich Estate Collection",
    description:
      "A single-owner sale featuring European silver, Asian works of art, fine rugs, and a notable library of rare books.",
    lots: 512,
    location: "Litchfield Gallery",
    status: "Cataloging",
  },
]

export function UpcomingAuctions() {
  return (
    <section id="auctions" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              The Calendar
            </span>
            <h2 className="mt-3 text-balance font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Upcoming Auctions
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Preview our forthcoming sales and register to bid in person, by
              phone, or live online.
            </p>
          </div>
          <Button
            variant="outline"
            className="self-start border-primary/30 bg-transparent text-primary hover:bg-primary/5 md:self-auto"
          >
            View Full Calendar
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {auctions.map((auction) => (
            <article
              key={auction.title}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between border-b border-border bg-primary px-6 py-5 text-primary-foreground">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl font-bold leading-none">
                    {auction.date}
                  </span>
                  <span className="text-sm text-primary-foreground/70">
                    {auction.year}
                  </span>
                </div>
                <span className="rounded-full bg-tan px-3 py-1 text-xs font-semibold uppercase tracking-wide text-tan-foreground">
                  {auction.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {auction.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {auction.description}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5 text-sm">
                  <div className="flex items-center gap-2 text-foreground/80">
                    <CalendarDays className="size-4 text-secondary" aria-hidden="true" />
                    <span>
                      <dt className="sr-only">Lots</dt>
                      <dd>{auction.lots} lots</dd>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <MapPin className="size-4 text-secondary" aria-hidden="true" />
                    <span>
                      <dt className="sr-only">Location</dt>
                      <dd>{auction.location}</dd>
                    </span>
                  </div>
                </dl>

                <Button className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  View Catalog
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
