"use client"

import { useState } from "react"
import { Gavel, Menu, X, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Auctions", href: "#auctions" },
  { label: "Featured Lots", href: "#featured" },
  { label: "Categories", href: "#categories" },
  { label: "About", href: "#about" },
  { label: "Sell With Us", href: "#about" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <Gavel className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-bold tracking-tight text-foreground">
              Colburn Auctions
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-secondary">
              Est. 1978 &middot; Connecticut
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            className="border-primary/30 bg-transparent text-primary hover:bg-primary/5"
          >
            <MapPin className="size-4" aria-hidden="true" />
            Visit Us
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Gavel className="size-4" aria-hidden="true" />
            Bid Online
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button
                variant="outline"
                className="border-primary/30 bg-transparent text-primary"
              >
                <MapPin className="size-4" aria-hidden="true" />
                Visit Us
              </Button>
              <Button className="bg-primary text-primary-foreground">
                <Gavel className="size-4" aria-hidden="true" />
                Bid Online
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
