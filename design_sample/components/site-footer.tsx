import { GithubIcon } from "@/components/icons"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="grid size-6 place-items-center rounded bg-primary text-xs text-primary-foreground">
            {"</>"}
          </span>
          <span>
            READTHEM<span className="text-primary">.md</span>
          </span>
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          {"// built by developers, for developers"}
        </p>

        <a
          href="#"
          aria-label="GitHub 저장소"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <GithubIcon className="size-5" />
        </a>
      </div>
    </footer>
  )
}
