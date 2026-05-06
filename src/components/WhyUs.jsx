import whyus from '../content/whyus.json';
import { CheckSvg } from './Icons';

export default function WhyUs() {
  return (
    <section id="why">
      <div className="container">
        <div className="why-layout">
          <div>
            <span className="label">Чому ми</span>
            <h2>Ваш час — наша відповідальність</h2>
            <p className="lead">Ми не ремонтуємо самі — ми знаємо, хто зробить це краще за всіх.</p>
            <div className="why-list">
              {whyus.map((w, i) => (
                <div className="why-item" key={i}>
                  <div className="why-icon"><CheckSvg /></div>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-image">
            <img src="/uploads/car_5-ebb70c11.jpeg" alt="Автомобіль у сервісі" style={{ height: '557px' }} />
            <div className="why-image-bar"></div>
            <div className="why-image-corner"></div>
            <div className="why-image-corner2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
