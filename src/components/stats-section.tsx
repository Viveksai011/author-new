import { STATS } from '@/constants/site-data'

export function StatsSection() {
  return (
    <div className="container-custom" style={{ padding: '3rem 1.5rem' }}>
      <div className="stats">
        {STATS.map((stat) => (
          <span key={stat.label}>
            {stat.value}
            <small>{stat.label}</small>
          </span>
        ))}
      </div>
    </div>
  )
}
