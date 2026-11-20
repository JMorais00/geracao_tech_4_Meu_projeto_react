export function MainContent({ title, subtitle, children }) {
  return (
    <main className="main-content">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>

      <div className="cards-container">{children}</div>
    </main>
  );
}

export function Card({ title, description, children }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{description}</p>

      <div className="card-content">{children}</div>
    </article>
  );
}

export function Tag({ children }) {
  return <span className="tag">{children}</span>;
}
