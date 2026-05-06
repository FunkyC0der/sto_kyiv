import steps from '../content/steps.json';

export default function HowWeWork() {
  return (
    <section id="how">
      <div className="container">
        <span className="label">Як це працює</span>
        <h2>Три кроки</h2>
        <div className="how-grid">
          {steps.map((s, i) => (
            <div className="how-step" key={i}>
              <div className="how-step-bar"></div>
              <div className="how-num">{s.num}</div>
              <div className="how-title">{s.title}</div>
              <div className="how-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
