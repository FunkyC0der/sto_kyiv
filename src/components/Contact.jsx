import ContactTiles from './ContactTiles';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-glow"></div>
      <div className="container">
        <div className="contact-inner">
          <span className="label">Зв&apos;яжіться з нами</span>
          <h2>Підберемо СТО за 5 хвилин</h2>
          <p className="lead">Не знайшли свою послугу? Напишіть або подзвоніть — скоріш за все ми це робимо. Відповімо швидко.</p>
          <ContactTiles style={{ marginBottom: '24px' }} />
          <p className="contact-note">Щодня з 9:00 до 21:00</p>
        </div>
      </div>
    </section>
  );
}
