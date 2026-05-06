import site from './content/site.json';

const id = site.gaId;

if (id && id !== 'G-XXXXXXXXXX') {
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', id);
}

const { contactClick, contactMethod, clickLocation } = site.gaEvents;

export function trackContact(method, location) {
  if (typeof window.gtag === 'undefined') return;
  window.gtag('event', contactClick, {
    [contactMethod]: method,
    [clickLocation]: location,
  });
}
