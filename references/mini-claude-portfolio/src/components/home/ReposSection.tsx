import { getAllRepos, LANGS } from "@/lib/content";

import "./ReposSection.css";

export function ReposSection() {
  const repos = getAllRepos();
  return (
    <section id="repos">
      <div className="sec-head">
        <span className="sec-title">Open source</span>
        <span className="sec-num">@gebeto on github</span>
      </div>
      <div className="repos">
        {repos.map((r) => (
          <div key={r.slug} className="repo">
            <div className="repo-head">
              <div className="repo-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M6 3v12a2 2 0 0 0 2 2h12V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2zm0 14a2 2 0 0 0 2 2h12" />
                </svg>
              </div>
              <a href="#" className="repo-name">
                <span className="slash">gebeto /</span> {r.name}
              </a>
            </div>
            <div className="repo-desc">{r.desc}</div>
            <div className="repo-foot">
              <span>
                <span className="lang-dot" style={{ background: LANGS[r.lang] }} />
                {r.lang}
              </span>
              <span>★ {r.stars.toLocaleString()}</span>
              <span>⑂ {r.forks}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
