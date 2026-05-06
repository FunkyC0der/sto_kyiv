import site from '../content/site.json';
import { PhoneSvg, TgSvg, ViberSvg, WaSvg, IgSvg } from './Icons';
import { trackContact } from '../analytics';

const CONTACTS = [
  { href: site.call,      label: site.phoneDisplay, icon: <PhoneSvg />, color: '#c62828', method: 'phone' },
  { href: site.telegram,  label: 'Telegram',         icon: <TgSvg />,    color: '#229ED9', method: 'telegram' },
  { href: site.viber,     label: 'Viber',             icon: <ViberSvg />, color: '#7360f2', method: 'viber' },
  { href: site.whatsapp,  label: 'WhatsApp',          icon: <WaSvg />,    color: '#25d366', method: 'whatsapp' },
  { href: site.instagram, label: 'Instagram',         icon: <IgSvg />,    color: '#e1306c', method: 'instagram', external: true },
];

export default function ContactTiles({ style }) {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', ...style }}>
      {CONTACTS.map((c, i) => (
        <a key={i} href={c.href}
          className="contact-icon-link"
          target={c.external ? '_blank' : undefined}
          rel={c.external ? 'noopener noreferrer' : undefined}
          title={c.label}
          style={{ background: c.color }}
          onClick={() => trackContact(c.method, 'contact')}
        >
          {c.icon}
        </a>
      ))}
    </div>
  );
}
