import { Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "45+", label: "Years in business" },
  { value: "12,000+", label: "Lots sold annually" },
  { value: "$40M+", label: "Yearly hammer total" },
]

export function AboutAuctioneer() {
  return (
    <section id="about" className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-tan/20">
            <img
              src="/auctioneer.png"
              alt="Patrick Soucy, principal auctioneer of Colburn Auctions"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-lg border border-tan/30 bg-secondary p-5 shadow-xl sm:block">
            <p className="font-serif text-lg font-bold text-secondary-foreground">
              Patrick Soucy
            </p>
            <p className="text-sm text-secondary-foreground/80">
              Founder &amp; Principal Auctioneer
            </p>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-tan">
            The Auctioneer
          </span>
          <h2 className="mt-3 text-balance font-serif text-4xl font-bold tracking-tight md:text-5xl">
            Four Decades of Trusted Expertise
          </h2>

          <div className="mt-6 space-y-4 leading-relaxed text-primary-foreground/80">
            <p>
              Founded in 1978, Colburn Auctions has grown from a small
              Litchfield County gallery into one of New England&apos;s most
              respected auction houses. Under the direction of Patrick
              Soucy, our team of specialists brings scholarship, discretion,
              and record-setting results to every consignment.
            </p>
            <div className="relative rounded-lg border-l-2 border-tan bg-primary-foreground/5 p-5">
              <Quote className="absolute -left-3 -top-3 size-6 text-tan" aria-hidden="true" />
              <p className="italic text-primary-foreground/90">
                &ldquo;Every object tells a story. Our privilege is to find it
                the right steward for the next chapter.&rdquo;
              </p>
            </div>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-tan/20 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-3xl font-bold text-tan">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs uppercase tracking-wide text-primary-foreground/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="bg-tan text-tan-foreground hover:bg-tan/90">
              Request an Appraisal
            </Button>
            <Button
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              Meet Our Specialists
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
