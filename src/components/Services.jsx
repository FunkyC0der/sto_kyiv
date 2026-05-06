import services from '../content/services.json';

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="services-header">
          <div>
            <span className="label">Послуги</span>
            <h2>Що ми робимо</h2>
          </div>
        </div>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="svc-card" key={i}>
            <div className="svc-photo" style={{ backgroundImage: `url('${s.photo}')` }}></div>
            <div className="svc-overlay"></div>
            <div className="svc-accent-line"></div>
            <div className="svc-num">{s.num}</div>
            <div className="svc-content">
              <div className="svc-title">{s.title}</div>
              <div className="svc-desc">{s.desc}</div>
              <div className="svc-tags">
                {s.tags.map((t, j) => <span className="svc-tag" key={j}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
