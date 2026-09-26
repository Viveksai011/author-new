import { FEATURE_CARDS } from '@/constants/site-data'

export function FeatureCardsSection() {
  return (
    <section className="feature-cards">
      {FEATURE_CARDS.map((card) => (
        <div key={card.number} className="feature-card">
          <b>{card.number}</b>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </section>
  )
}
