import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"

export function Cta() {
  return (
    <section className="border-t border-border/60 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border bg-card px-6 py-14 text-center sm:px-12">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            당신의 다음 커밋은 <span className="text-primary">한 권의 책</span>입니다
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            지금 GitHub 계정으로 시작하고, 첫 리뷰를 독서 이력에 새겨보세요. 그리고 프로필에 자랑하세요.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" className="gap-2">
              <GithubIcon className="size-5" />
              GitHub으로 무료 시작
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
