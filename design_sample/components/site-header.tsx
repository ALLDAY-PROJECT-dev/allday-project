import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"

const navLinks = [
  { label: "기능", href: "#features" },
  { label: "작동 방식", href: "#how-it-works" },
  { label: "위젯", href: "#widget" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight">
          <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
            <span aria-hidden>{"</>"}</span>
          </span>
          <span>
            READTHEM<span className="text-primary">.md</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button size="sm" className="gap-2 font-medium">
          <GithubIcon className="size-4" />
          <span className="hidden sm:inline">GitHub으로 시작</span>
          <span className="sm:hidden">시작하기</span>
        </Button>
      </div>
    </header>
  )
}
