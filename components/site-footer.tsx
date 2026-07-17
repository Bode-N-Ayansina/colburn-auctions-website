import { Gavel, MapPin, Phone, Mail, Clock } from "lucide-react"

const linkGroups = [
  {
    title: "Auctions",
    links: ["Upcoming Sales", "Auction Results", "How to Bid", "Bid Live Online"],
  },
  {
    title: "Departments",
    links: ["Fine Art", "Jewelry", "Furniture", "Estate Items"],
  },
  {
    title: "Services",
    links: ["Sell With Us", "Free Appraisals", "Estate Services", "Consignments"],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-sm bg-tan text-tan-foreground">
                <Gavel className="size-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-bold">
                  Colburn Auctions
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-tan">
                  Est. 1978 &middot; Connecticut
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/70">
              Connecticut&apos;s premier auction house for fine art, antiques,
              jewelry, and distinguished estate collections since 1978.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-tan" aria-hidden="true" />
                <span>Colburn Road, Stafford Springs, CT</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-tan" aria-hidden="true" />
                <a href="tel:+18606842400" className="hover:text-background">
                  860-684-2400
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-tan" aria-hidden="true" />
                <a href="mailto:info@colburnauctions.com" className="hover:text-background">
                  info@colburnauctions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-tan" aria-hidden="true" />
                <span>Tue&ndash;Sat, 10:00 AM &ndash; 5:00 PM</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-serif text-base font-bold text-tan">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-background/70">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition-colors hover:text-background">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-background/15 pt-8 text-sm text-background/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Colburn Auctions, LLC. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-background">Privacy Policy</a>
            <a href="#" className="hover:text-background">Terms of Sale</a>
            <a href="#" className="hover:text-background">Buyer&apos;s Premium</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
