import "./NowSection.css";

export function NowSection() {
  return (
    <section id="now">
      <div className="sec-head">
        <span className="sec-title">Now</span>
        <span className="sec-num">Apr 2026</span>
      </div>
      <div className="now-card">
        <div className="marker" />
        <p>
          Currently at <b>SPSoft</b>, leading the platform rewrite of a logistics client&rsquo;s core routing service. On the side, re-reading <b>A Philosophy of Software Design</b> and slowly building a small self-hosted RSS reader. Taking on one new freelance engagement this quarter.
        </p>
      </div>
    </section>
  );
}
