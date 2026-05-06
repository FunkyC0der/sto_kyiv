import reviews from '../content/reviews.json';

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="container">
        <span className="label">Відгуки</span>
        <h2>Що кажуть клієнти</h2>
      </div>
      <div className="container" style={{ paddingLeft: 0, paddingRight: 0, maxWidth: 'none' }}>
        <div className="reviews-grid" style={{ margin: '56px 0 0' }}>
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-quote" style={{ lineHeight: '0.7' }}>&ldquo;</div>
              <div className="review-text">{r.text}</div>
              <div className="review-stars">★★★★★</div>
              <div className="review-author">
                <div className="review-avatar" style={{ background: `linear-gradient(135deg, ${r.color}, #2979ff)` }}>{r.init}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-meta">{r.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
