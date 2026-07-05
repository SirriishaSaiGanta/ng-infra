interface StatCardProps {
  value: string
  label: string
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="stat-card">
      <span className="stat-card__value">{value}</span>
      <span className="stat-card__label">{label}</span>
    </div>
  )
}

export default StatCard
