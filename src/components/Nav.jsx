import site from '../content/site.json';
import { PhoneSvg, TgSvg, ViberSvg, WaSvg, IgSvg } from './Icons';
import { trackContact } from '../analytics';

const BUTTONS = [
  { href: site.call,      color: '#c62828', icon: <PhoneSvg />, title: site.phoneDisplay, method: 'phone' },
  { href: site.telegram,  color: '#229ED9', icon: <TgSvg />,    title: 'Telegram',        method: 'telegram' },
  { href: site.viber,     color: '#7360f2', icon: <ViberSvg />, title: 'Viber',           method: 'viber' },
  { href: site.whatsapp,  color: '#25d366', icon: <WaSvg />,    title: 'WhatsApp',        method: 'whatsapp' },
  { href: site.instagram, color: '#e1306c', icon: <IgSvg />,    title: 'Instagram',       method: 'instagram', external: true },
];

export default function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        <img src="/uploads/logo_without_bg-3c2d485f.png" alt="Pro.Mp.Kyiv" />
      </a>
      <div className="nav-cta">
        {BUTTONS.map((b, i) => (
          <a key={i} href={b.href} className="nav-icon-btn"
            title={b.title}
            target={b.external ? '_blank' : undefined}
            rel={b.external ? 'noopener noreferrer' : undefined}
            style={{ background: b.color }}
            onClick={() => trackContact(b.method, 'nav')}
          >{b.icon}</a>
        ))}
      </div>
    </nav>
  );
}
