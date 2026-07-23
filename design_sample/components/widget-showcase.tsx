import { ReadingHeatmap } from "@/components/reading-heatmap"

const stats = [
  { label: "올해 읽은 책", value: "42" },
  { label: "작성한 리뷰", value: "128" },
  { label: "연속 독서", value: "12주" },
  { label: "즐겨 읽는 분야", value: "Backend" },
]

export function WidgetShowcase() {
  return (
    <section id="widget" className="border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-primary">{"// readme widget"}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            복사, 붙여넣기. 그게 전부입니다
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            아래 한 줄을 프로필 스페셜 레포지토리 README.md에 넣으면 위젯이 렌더링됩니다.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* 스니펫 */}
          <div className="flex flex-col rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="font-mono text-xs text-muted-foreground">README.md</span>
              <span className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
                markdown
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
              <code>
                <span className="text-muted-foreground">{"<!-- READTHEM.md 위젯 -->"}</span>
                {"\n"}
                <span className="text-primary">![My Reading]</span>
                {"(https://readthem.md/"}
                <span className="text-accent-foreground">octocat</span>
                {"/widget.svg)"}
              </code>
            </pre>
          </div>

          {/* 렌더링된 위젯 */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <span className="grid size-6 place-items-center rounded bg-primary font-mono text-xs text-primary-foreground">
                {"</>"}
              </span>
              <span className="font-mono text-sm font-semibold">
                octocat<span className="text-muted-foreground">&apos;s reading</span>
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg bg-secondary p-3">
                  <p className="text-xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 overflow-x-auto">
              <ReadingHeatmap />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
