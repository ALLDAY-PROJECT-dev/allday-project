import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { ReadingHeatmap } from "@/components/reading-heatmap"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            개발자 전용 · GitHub OAuth
          </span>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            리뷰가 곧 <span className="text-primary">독서 이력</span>이 됩니다
          </h1>

          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            READTHEM.md는 개발자를 위한 도서 리뷰 플랫폼입니다. 읽은 책의 리뷰를 남기면 자동으로 독서 이력에 쌓이고,
            그 통계를 GitHub 프로필 README.md 위젯으로 자랑할 수 있어요.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="gap-2">
              <GithubIcon className="size-5" />
              GitHub으로 시작하기
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="#widget">위젯 미리보기</a>
            </Button>
          </div>

          <p className="font-mono text-xs text-muted-foreground">
            {"// 리뷰 작성은 개발자 계정만 가능합니다"}
          </p>
        </div>

        <div className="relative">
          <div className="rounded-xl border border-border bg-card shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="size-3 rounded-full bg-destructive/70" />
              <span className="size-3 rounded-full bg-muted-foreground/40" />
              <span className="size-3 rounded-full bg-primary/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">octocat/octocat/README.md</span>
            </div>
            <div className="space-y-4 p-5 font-mono text-sm">
              <p className="text-muted-foreground">{"### 📚 My Reading"}</p>
              <ReadingHeatmap />
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="rounded-md bg-secondary px-2 py-1 text-xs">올해 42권</span>
                <span className="rounded-md bg-secondary px-2 py-1 text-xs">리뷰 128개</span>
                <span className="rounded-md bg-accent px-2 py-1 text-xs text-accent-foreground">연속 12주</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
