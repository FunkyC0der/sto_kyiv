import site from '../content/site.json';
import ContactTiles from './ContactTiles';
import { PhoneSvg } from './Icons';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bar"></div>
      <div className="hero-left container">
        <div className="hero-eyebrow">
          <span className="hero-dot"></span>
          <span>Святошинський · Солом&apos;янський · Київ</span>
        </div>
        <h1>
          <span className="h1-chrome">Pro.</span><span className="h1-blue">Mp.</span>
          <br />
          <span className="h1-chrome">Kyiv</span>
        </h1>
        <p className="hero-desc">
          Підбираємо перевірене СТО під вашу задачу — ТО, кузовний ремонт, малярка, електрика, детейлінг та захист кузова.
          Відповідаємо за&nbsp;5&nbsp;хвилин.
        </p>
        <ContactTiles style={{ marginBottom: '12px' }} />
        <a href={site.call} className="hero-phone-link">
          <PhoneSvg />{site.phoneDisplay}
        </a>
        <div className="hero-stats">
          <div>
            <div className="stat-num">6+</div>
            <div className="stat-label">Напрямки послуг</div>
          </div>
          <div>
            <div className="stat-num">5хв</div>
            <div className="stat-label">Час відповіді</div>
          </div>
          <div>
            <div className="stat-num">0₴</div>
            <div className="stat-label">Комісія з вас</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img"></div>
        <div className="hero-img-overlay"></div>
      </div>
    </section>
  );
}
