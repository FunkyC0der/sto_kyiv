import { useState } from 'react';
import faqs from '../content/faqs.json';

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section id="faq">
      <div className="container">
        <span className="label">FAQ</span>
        <h2>Часті запитання</h2>
        <div className="faq-wrap">
          {faqs.map((f, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
              <div
                className="faq-q"
                role="button"
                tabIndex={0}
                aria-expanded={open === i}
                onClick={() => toggle(i)}
                onKeyDown={(e) => e.key === 'Enter' && toggle(i)}
              >
                <span>{f.q}</span>
                <span className="faq-cross"></span>
              </div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
