import StatCard from '../ui/StatCard'
import { SECTION_IDS } from '../../constants/sectionIds'
import { COMPANY_STATS } from '../../data/stats'

const CompanyStats = () => {
  return (
    <section id={SECTION_IDS.stats} className="section stats">
      <div className="container stats__grid">
        {COMPANY_STATS.map((stat) => (
          <StatCard key={stat.id} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  )
}

export default CompanyStats
