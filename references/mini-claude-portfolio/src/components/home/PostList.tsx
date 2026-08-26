import Link from "next/link";

import "./PostList.css";

export type PostListItem = {
  kicker?: string;
  title: string;
  href: string;
  /** Use next/link (internal route) instead of a plain anchor. */
  internal?: boolean;
  excerpt: string;
  date: string;
};

export function PostList({ items }: { items: PostListItem[] }) {
  return (
    <div className="list-card">
      <div className="list-rows">
        {items.map((item, i) => (
          <div className="row" key={`${item.title}-${i}`}>
            <div>
              <div className="title-line">
                {item.kicker && <span className="kicker">{item.kicker}</span>}
                {item.internal ? (
                  <Link href={item.href}>{item.title}</Link>
                ) : (
                  <a href={item.href}>{item.title}</a>
                )}
              </div>
              <div className="excerpt">{item.excerpt}</div>
            </div>
            <div className="date">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
