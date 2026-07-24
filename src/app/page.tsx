import { SiteFooter } from "@/components/site-footer";
import styles from "./home.module.css";

const DoubleChevronDownIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="m4 3.5 4 4 4-4M4 8.5l4 4 4-4" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <header className="header">
        <a className="logo" href="#top" aria-label="ALLDAY PROJECT" />
        <nav>
          <a href="#top">팀 소개</a>
          <a href="#features">서비스</a>
        </nav>
        <a className="button small" href="/readthem">
          <span>서비스 살펴보기</span>
        </a>
      </header>
      <section className={`hero wrap ${styles.teamHero}`} id="top">
        <div className="hero-copy">
          <p className="pill">
            <i /> ALLDAY PROJECT · TEAM INTRODUCTION
          </p>
          <h1>
            <span className={styles.headlineLine}>프로그래머스 데브코스에서</span>
            <span className={styles.headlineLine}>함께 성장한</span>
            <span className={styles.headlineLine}>세 명의 개발자가 모였습니다.</span>
          </h1>
          <code>// we are ALLDAY, working to make every PROJECT better</code>
        </div>
      </section>
      <section className={`section ${styles.servicesSection}`} id="features">
        <div className="wrap">
          <div className="heading">
            <code className={styles.sectionCue}><DoubleChevronDownIcon /> what we make</code>
            <h2>우리가 만드는 것</h2>
            <p>
              사용자에게 실제 가치를 주는 서비스를 만듭니다.
            </p>
          </div>
          <div className="feature-grid">
            <article className="col-span-full">
              <div className="mb-9 flex items-center justify-between">
                <b className="grid size-12 place-items-center bg-[#111] text-lg text-white">
                  R
                </b>
                <span className="border border-[#dedede] px-2 py-1 font-mono text-[11px] text-[#666]">
                  NOW BUILDING
                </span>
              </div>
              <h3 className="text-2xl!">READTHEM.md</h3>
              <p className="max-w-xl">
                개발자를 위한 도서 리뷰 플랫폼. 나의 독서 이력을 GitHub 프로필과 함께 공유합니다.
              </p>
              <div className="mt-7 flex flex-wrap gap-2 text-[11px] text-[#666]">
                <span className="bg-[#f5f5f5] px-2 py-1">Community</span>
                <span className="bg-[#f5f5f5] px-2 py-1">Review</span>
                <span className="bg-[#f5f5f5] px-2 py-1">Recommendation</span>
              </div>
              <a
                className="mt-8 inline-flex items-center gap-2 font-bold text-sm"
                href="/readthem"
              >
                서비스 자세히 보기 <b>→</b>
              </a>
            </article>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
