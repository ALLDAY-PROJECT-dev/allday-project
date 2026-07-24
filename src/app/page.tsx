const GithubIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.4-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.37c.85 0 1.7.12 2.5.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.96-2.35 4.83-4.58 5.09.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10 10 0 0 0 12 2Z" /></svg>;

const Heatmap = () => <div className="heatmap" aria-label="최근 독서 활동"><div className="heat-label">Mon</div>{Array.from({ length: 22 }, (_, col) => <div className="heat-week" key={col}>{Array.from({ length: 7 }, (_, row) => <i className={`l${(col * 3 + row * 2 + 1) % 5}`} key={row} />)}</div>)}</div>;

const features = [
  ["⌘", "개발자만의 리뷰 공간", "GitHub 소셜 로그인으로 인증한 개발자만 리뷰를 남깁니다. 스팸 없이 신뢰할 수 있는 리뷰가 쌓입니다."],
  ["▣", "리뷰 = 독서 이력", "리뷰를 남기는 순간 나의 독서 이력에 자동으로 추가됩니다. 기록이 곧 성장의 증거가 됩니다."],
  ["↗", "독서 통계 대시보드", "월별 독서량, 카테고리 분포, 연속 독서 주간까지. 나의 독서 습관을 한눈에 확인하세요."],
  ["</>", "README.md 위젯", "프로필 README에 한 줄만 붙여넣으면, 실시간 독서 통계 위젯이 완성됩니다."],
  ["◎", "함께 나누는 리뷰", "동료 개발자들의 리뷰를 탐색하고, 다음에 읽을 책에 대한 새로운 인사이트를 발견하세요."],
  ["#", "마크다운 네이티브", "코드 블록, 인용, 링크까지. 개발자에게 익숙한 마크다운으로 자연스럽게 리뷰를 작성합니다."],
];

const steps = ["GitHub으로 로그인", "책 리뷰 작성", "통계 확인", "README에 위젯 임베드"];
const stepCopy = ["별도의 회원가입 없이 GitHub 계정으로 3초 만에 시작합니다. 개발자 인증이 곧 가입입니다.", "읽은 책을 검색해 마크다운으로 리뷰를 남기세요. 저장하는 순간 독서 이력에 자동 기록됩니다.", "대시보드에서 나의 독서 흐름을 확인하고, 함께 성장할 동료의 리뷰도 둘러봅니다.", "발급된 스니펫을 프로필 README.md에 붙여넣으면 실시간 독서 위젯이 완성됩니다."];

export default function Home() {
  return <main>
    <header className="header"><a className="logo" href="#top" aria-label="ALLDAY PROJECT" /><nav><a href="#features">기능</a><a href="#how">작동 방식</a><a href="#widget">위젯</a></nav><a className="button small" href="#start"><GithubIcon /> <span>GitHub으로 시작</span></a></header>
    <section className="hero wrap" id="top"><div className="hero-copy"><p className="pill"><i /> 개발자 전용 · GitHub OAuth</p><h1>리뷰가 곧 <strong>독서 이력</strong>이 됩니다</h1><p>READTHEM.md는 개발자를 위한 도서 리뷰 플랫폼입니다. 읽은 책의 리뷰를 남기면 자동으로 독서 이력에 쌓이고, 그 통계를 GitHub 프로필 README.md 위젯으로 공유할 수 있어요.</p><div className="actions"><a className="button" href="#start"><GithubIcon /> GitHub으로 시작하기</a><a className="button ghost" href="#widget">위젯 미리보기 <b>→</b></a></div><code>// 리뷰 작성은 개발자 계정만 가능합니다</code></div>
      <div className="readme-card"><div className="windowbar"><i /><i /><i /><span>octocat/octocat/README.md</span></div><div className="readme"><p>### 📚 My Reading</p><Heatmap /><div className="badges"><span>올해 42권</span><span>리뷰 128개</span><span>연속 12주</span></div></div></div>
    </section>
    <section className="section" id="features"><div className="wrap"><div className="heading"><code>// features</code><h2>읽고, 기록하고, 공유하는 하나의 흐름</h2><p>리뷰 작성부터 통계 공유까지, 개발자의 독서 경험에 꼭 맞게 설계했습니다.</p></div><div className="feature-grid">{features.map(([icon,title,desc]) => <article key={title}><b className="feature-icon">{icon}</b><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
    <section className="section ruled" id="how"><div className="wrap"><div className="heading"><code>// how it works</code><h2>시작하는 데 4단계면 충분합니다</h2></div><ol className="steps">{steps.map((step,index) => <li key={step}><b>0{index + 1}</b><h3>{step}</h3><p>{stepCopy[index]}</p></li>)}</ol></div></section>
    <section className="section ruled" id="widget"><div className="wrap"><div className="heading"><code>// readme widget</code><h2>복사, 붙여넣기. 그게 전부입니다</h2><p>아래 한 줄을 프로필 스페셜 레포지토리 README.md에 넣으면 위젯이 렌더링됩니다.</p></div><div className="widget-grid"><div className="code-box"><div className="card-title"><span>README.md</span><em>markdown</em></div><pre><span className="muted">&lt;!-- READTHEM.md 위젯 --&gt;</span>{'\n'}<b>![My Reading]</b>(https://readthem.md/<i>octocat</i>/widget.svg)</pre></div><div className="widget-card"><div className="widget-title"><b>&lt;/&gt;</b><span>octocat<span>&apos;s reading</span></span></div><div className="stat-grid">{[["42","올해 읽은 책"],["128","작성한 리뷰"],["12주","연속 독서"],["Backend","즐겨 읽는 분야"]].map(([v,l])=><div key={l}><b>{v}</b><span>{l}</span></div>)}</div><Heatmap /></div></div></div></section>
    <section className="section ruled"><div className="wrap cta"><div><code>// your next commit</code><h2>당신의 다음 커밋은 <strong>한 권의 책</strong>입니다</h2><p>지금 GitHub 계정으로 시작하고, 첫 리뷰를 독서 이력에 새겨보세요. 그리고 프로필에 자랑하세요.</p><a className="button" id="start" href="#top"><GithubIcon /> GitHub으로 무료 시작</a></div></div></section>
    <footer><a className="logo" href="#top" aria-label="ALLDAY PROJECT" /><code>// built by developers, for developers</code><a aria-label="GitHub" href="#top"><GithubIcon /></a></footer>
  </main>;
}
