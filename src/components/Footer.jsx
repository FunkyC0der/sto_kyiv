import site from '../content/site.json';
import { trackContact } from '../analytics';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src="/uploads/logo.png" alt="Pro.Mp.Kyiv" />
            </div>
            <p className="footer-tagline">Агрегатор перевірених СТО у Києві — ТО, кузовний та малярний ремонт</p>
          </div>
          <div className="footer-links">
            <a href={site.call} onClick={() => trackContact('phone', 'footer')}>{site.phoneDisplay}</a>
            <a href={site.telegram} onClick={() => trackContact('telegram', 'footer')}>Telegram</a>
            <a href={site.viber} onClick={() => trackContact('viber', 'footer')}>Viber</a>
            <a href={site.whatsapp} onClick={() => trackContact('whatsapp', 'footer')}>WhatsApp</a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" onClick={() => trackContact('instagram', 'footer')}>Instagram</a>
          </div>
        </div>
        <p className="footer-disc">
          Ми не несемо відповідальності за роботи, виконані партнерськими СТО, але співпрацюємо тільки
          з тими, кого перевірили особисто. &copy; 2026 Pro.Mp.Kyiv
        </p>
      </div>
    </footer>
  );
}
