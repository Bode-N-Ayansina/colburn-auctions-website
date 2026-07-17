import { Armchair, Gem, Palette, Landmark, ArrowUpRight } from "lucide-react"

const categories = [
  {
    icon: Armchair,
    title: "Furniture",
    description:
      "American & European period furniture, from Federal to Mid-Century.",
    count: "1,200+ lots yearly",
  },
  {
    icon: Gem,
    title: "Jewelry",
    description:
      "Signed jewels, natural gemstones, and fine estate timepieces.",
    count: "800+ lots yearly",
  },
  {
    icon: Palette,
    title: "Fine Art",
    description:
      "Paintings, prints, and sculpture spanning three centuries.",
    count: "950+ lots yearly",
  },
  {
    icon: Landmark,
    title: "Estate Items",
    description:
      "Silver, porcelain, rugs, rare books, and single-owner collections.",
    count: "1,500+ lots yearly",
  },
]

export function Categories() {
  return (
    <section id="categories" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            What We Sell
          </span>
          <h2 className="mt-3 text-balance font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Explore Our Departments
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Specialists in every category ensure each consignment receives
            expert appraisal and the widest possible audience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="#featured"
              className="group flex flex-col rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
            >
              <span className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary-foreground/15 group-hover:text-primary-foreground">
                <cat.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold">{cat.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/80">
                {cat.description}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm font-medium group-hover:border-primary-foreground/20">
                <span className="text-secondary group-hover:text-tan">
                  {cat.count}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary-foreground" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
