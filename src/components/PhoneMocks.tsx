export function PhoneMocks() {
  return (
    <div className="phones" aria-hidden="true">
      <article className="phone">
        <span className="phone-rail phone-rail-left" />
        <span className="phone-rail phone-rail-right" />
        <div className="phone-screen">
          <div className="phone-island" />
          <div className="row">
            <span>Screen</span>
            <span>Sample</span>
          </div>
          <p className="balance">Layout</p>
          <div className="tile">Illustrative only</div>
        </div>
      </article>
      <article className="phone">
        <span className="phone-rail phone-rail-left" />
        <span className="phone-rail phone-rail-right" />
        <div className="phone-screen">
          <div className="phone-island" />
          <div className="row">
            <span>Overview</span>
            <span>Sample</span>
          </div>
          <p className="balance">—</p>
          <p className="row">Not live data</p>
          <div className="tile-grid">
            <div className="tile asset">
              <span>Item</span>
              <span>—</span>
            </div>
            <div className="tile asset">
              <span>Item</span>
              <span>—</span>
            </div>
          </div>
        </div>
      </article>
      <article className="phone">
        <span className="phone-rail phone-rail-left" />
        <span className="phone-rail phone-rail-right" />
        <div className="phone-screen">
          <div className="phone-island" />
          <div className="row">
            <span>Detail</span>
            <span>Sample</span>
          </div>
          <p className="balance">App</p>
          <div className="tile">Placeholder interface</div>
        </div>
      </article>
    </div>
  )
}
