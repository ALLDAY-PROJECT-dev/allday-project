const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.4-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.37c.85 0 1.7.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.96-2.35 4.83-4.58 5.09.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10 10 0 0 0 12 2Z"
    />
  </svg>
);

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
            프로그래머스 데브코스에서<br />
            함께 성장한<br />
            세 명의 개발자가 모였습니다.
          </h1>
          <code>// we are ALLDAY, working to make every PROJECT better</code>
        </div>
      </section>
      <section className="section" id="features">
        <div className="wrap">
          <div className="heading">
            <code className={styles.sectionCue}><DoubleChevronDownIcon /> what we make</code>
            <h2>우리가 만드는 것</h2>
            <p>
              작지만 분명한 문제에서 시작해, 매일 더 나은 경험을 만드는 서비스를
              만듭니다.
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
                개발자를 위한 도서 리뷰 플랫폼. 읽고, 기록하고, 나의 독서 이력을
                GitHub 프로필과 함께 공유합니다.
              </p>
              <div className="mt-7 flex flex-wrap gap-2 text-[11px] text-[#666]">
                <span className="bg-[#f5f5f5] px-2 py-1">Book Review</span>
                <span className="bg-[#f5f5f5] px-2 py-1">GitHub</span>
                <span className="bg-[#f5f5f5] px-2 py-1">Developer</span>
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
      <footer>
        <a className="logo" href="#top" aria-label="ALLDAY PROJECT" />
        <code>// built by developers, for developers</code>
        <a aria-label="GitHub" href="#top">
          <GithubIcon />
        </a>
      </footer>
    </main>
  );
}
import styles from "./home.module.css";
