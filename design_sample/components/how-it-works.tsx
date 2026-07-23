const steps = [
  {
    step: "01",
    title: "GitHub으로 로그인",
    desc: "별도의 회원가입 없이 GitHub 계정으로 3초 만에 시작합니다. 개발자 인증이 곧 가입입니다.",
  },
  {
    step: "02",
    title: "책 리뷰 작성",
    desc: "읽은 책을 검색해 마크다운으로 리뷰를 남깁니다. 저장하는 순간 독서 이력에 자동 기록됩니다.",
  },
  {
    step: "03",
    title: "통계 확인",
    desc: "대시보드에서 나의 독서 흐름과 통계를 확인하고, 함께 성장할 동료의 리뷰도 둘러봅니다.",
  },
  {
    step: "04",
    title: "README에 위젯 임베드",
    desc: "발급된 스니펫을 프로필 README.md에 붙여넣으면 실시간 독서 위젯이 완성됩니다.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-sm text-primary">{"// how it works"}</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            시작하는 데 4단계면 충분합니다
          </h2>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.step} className="relative rounded-xl border border-border bg-card p-6">
              <span className="font-mono text-3xl font-bold text-primary/40">{s.step}</span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
