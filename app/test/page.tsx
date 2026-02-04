export default function TestPage() {
  return (
    <>

      {/* HERO */}
      <section id="hero" className="section">
        <div className="container text-center">
          <h1>One Page TSX UI Test</h1>
          <p>Testing layout, typography, cards, buttons, and forms</p>
          <div className="mt-8">
            <a href="#cards" className="button">
              Primary Button
            </a>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section
        id="cards"
        className="section"
        style={{ background: "var(--bg-muted)" }}
      >
        <div className="container">
          <h2 className="text-center">Cards Grid</h2>
          <div className="grid grid-3 mt-8">
            <div className="card">
              <h3>Card One</h3>
              <p>Reusable card component style.</p>
            </div>
            <div className="card">
              <h3>Card Two</h3>
              <p>Responsive grid using pure CSS.</p>
            </div>
            <div className="card">
              <h3>Card Three</h3>
              <p>Perfect for landing pages or dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="section">
        <div className="container">
          <h2 className="text-center">Form Elements</h2>
          <div
            className="card mt-8"
            style={{ maxWidth: 500, margin: "0 auto" }}
          >
            <label>Name</label>
            <input type="text" placeholder="Your name" />

            <label className="mt-4">Message</label>
            <textarea rows={4} placeholder="Your message" />

            <button className="button mt-4">Submit</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">© 2026 • TSX UI Test Page</div>
      </footer>
    </>
  );
}
