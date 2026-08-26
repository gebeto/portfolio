import "./ContactSection.css";

export function ContactSection() {
  return (
    <section id="contact">
      <div className="sec-head">
        <span className="sec-title">Get in touch</span>
        <span className="sec-num" />
      </div>
      <dl className="contact-grid">
        <dt>Email</dt>
        <dd><a href="mailto:hello@example.com">hello@example.com</a></dd>
        <dt>GitHub</dt>
        <dd><a href="https://github.com/gebeto">github.com/gebeto</a></dd>
        <dt>LinkedIn</dt>
        <dd><a href="#">linkedin.com/in/yaroslav-nychkalo</a></dd>
        <dt>Mastodon</dt>
        <dd><a href="#">@gebeto@hachyderm.io</a></dd>
        <dt>RSS</dt>
        <dd><a href="#">/feed.xml</a></dd>
      </dl>
    </section>
  );
}
