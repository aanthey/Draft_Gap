import { roles } from '../roles'

const classes = ['Fighter', 'Mage', 'Marksman', 'Assassin', 'Tank', 'Support']
const strengths = [
  { tag: 'Fighter', label: 'Extended fights', detail: 'Fighters may help your team stay involved in longer skirmishes.' },
  { tag: 'Mage', label: 'Spell pressure', detail: 'Mages may contribute ranged spell pressure or burst.' },
  { tag: 'Marksman', label: 'Sustained damage', detail: 'Marksmen may provide repeated attacks through longer fights.' },
  { tag: 'Assassin', label: 'Backline threat', detail: 'Assassins may help threaten vulnerable enemy carries.' },
  { tag: 'Tank', label: 'Frontline presence', detail: 'Tanks may help absorb pressure for the rest of the team.' },
  { tag: 'Support', label: 'Team utility', detail: 'Support champions may help protect or enable teammates.' },
]

export default function TeamSummary({ team }) {
  const picks = roles.map((role) => team[role.id]).filter(Boolean)
  const missingRoles = roles.filter((role) => !team[role.id])
  const counts = Object.fromEntries(classes.map((tag) => [tag, picks.filter((pick) => pick.tags.includes(tag)).length]))
  const potentialStrengths = strengths.filter(({ tag }) => counts[tag] > 0)

  return (
    <section className="team-summary" aria-labelledby="summary-title">
      <div className="builder-header">
        <h2 id="summary-title">Team Composition</h2>
        <span className="team-count">{picks.length === 5 ? 'Full team' : 'Draft in progress'}</span>
      </div>
      <p className="summary-progress" role="status">
        {picks.length === 0
          ? 'Add your first champion to start exploring your team.'
          : missingRoles.length > 0
            ? `${picks.length} of 5 roles filled. Still to pick: ${missingRoles.map((role) => role.label).join(', ')}.`
            : 'All five roles are filled. Replace any pick to compare your composition.'}
      </p>
      {picks.length > 0 && (
        <>
          <h3>Class coverage</h3>
          <p className="summary-note">Champions can count toward more than one class.</p>
          <dl className="class-coverage">
            {classes.map((tag) => (
              <div className={counts[tag] > 0 ? 'class-present' : ''} key={tag}>
                <dt>{tag}</dt>
                <dd>{counts[tag]} <span className="sr-only">champions</span></dd>
              </div>
            ))}
          </dl>
          <h3>Potential strengths</h3>
          <ul className="team-strengths">
            {potentialStrengths.map(({ tag, label, detail }) => (
              <li key={tag}><strong>{label}</strong><span>{detail}</span></li>
            ))}
          </ul>
          <p className="summary-note">These are class-based hints, not a team rating. Actual strengths depend on champion abilities, builds, and play.</p>
          <h3>Damage mix</h3>
          <p className="summary-note">Damage-type breakdown is not available yet. Class tags alone do not reliably describe physical, magic, or mixed damage.</p>
        </>
      )}
    </section>
  )
}
