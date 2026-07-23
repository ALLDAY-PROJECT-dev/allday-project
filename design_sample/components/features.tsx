import { BookMarked, GitBranch, LayoutDashboard, ShieldCheck, TrendingUp, Users } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "개발자만의 리뷰 공간",
    desc: "리뷰 작성은 GitHub 소셜 로그인으로 인증한 개발자만 가능합니다. 스팸 없이 신뢰할 수 있는 리뷰가 쌓입니다.",
  },
  {
    icon: BookMarked,
    title: "리뷰 = 독서 이력",
    desc: "따로 이력을 관리할 필요 없이, 리뷰를 남기는 순간 자동으로 나의 독서 이력에 추가됩니다.",
  },
  {
    icon: TrendingUp,
    title: "독서 통계 대시보드",
    desc: "월별 독서량, 카테고리 분포, 연속 독서 주간 등 나의 독서 습관을 한눈에 확인하세요.",
  },
  {
    icon: GitBranch,
    title: "README.md 위젯",
    desc: "프로필 스페셜 레포지토리의 README.md에 붙여넣기만 하면 실시간 독서 통계 위젯이 렌더링됩니다.",
  },
  {
    icon: Users,
    title: "함께 나누는 리뷰",
    desc: "동료 개발자들의 기술서적 리뷰를 탐색하고, 다음에 읽을 책의 인사이트를 얻으세요.",
  },
  {
    icon: LayoutDashboard,
    title: "마크다운 네이티브",
    desc: "코드 블록, 인용, 링크까지. 개발자에게 익숙한 마크다운 문법 그대로 리뷰를 작성합니다.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-primary">{"// features"}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            읽고, 기록하고, 공유하는 하나의 흐름
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            리뷰 작성부터 통계 공유까지, 개발자의 독서 경험에 꼭 맞게 설계했습니다.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 grid size-10 place-items-center rounded-lg bg-accent text-accent-foreground">
                <feature.icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
