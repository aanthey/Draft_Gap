import { roles } from '../roles'
import TeamSummary from './TeamSummary'

export default function Builder({ team, activeRole, onSelectRole, onRemove }) {
  const count = roles.filter((role) => team[role.id]).length

  return (
    <section id="teambuilder-section" aria-labelledby="builder-title">
      <div className="builder-header">
        <h2 id="builder-title">Team Builder</h2>
        <span className="team-count">{count} / 5 picked</span>
      </div>
      <p className="builder-help">Select a role, then pick a champion. Select a filled role to replace its champion.</p>
      <div className="role-slots">
        {roles.map((role) => {
          const champion = team[role.id]
          return (
            <div className={`role-slot${activeRole === role.id ? ' is-active' : ''}`} key={role.id}>
              <button
                type="button"
                className="role-select"
                aria-pressed={activeRole === role.id}
                aria-label={`${role.label}: ${champion ? `${champion.name}, select to replace` : 'empty, select to add a champion'}`}
                onClick={() => onSelectRole(role.id)}
              >
                <img className="role-icon" src={`/assets/themes/light/icons/roles/${role.id}.svg`} alt="" />
                {champion ? <img className="slot-portrait" src={champion.icon} alt="" /> : <span className="empty-portrait" aria-hidden="true">+</span>}
                <span className="slot-copy">
                  <span className="role-label">{role.label}</span>
                  <strong>{champion ? champion.name : 'Add champion'}</strong>
                  <span className="slot-hint">{activeRole === role.id ? 'Choosing for this role' : champion ? 'Select to replace' : 'Select to pick'}</span>
                </span>
              </button>
              {champion && <button className="remove-champion" type="button" onClick={() => onRemove(role)} aria-label={`Remove ${champion.name} from ${role.label}`}>Remove</button>}
            </div>
          )
        })}
      </div>
      <p className="builder-summary">{count === 5 ? 'Your team is ready. You can still change any pick.' : `${5 - count} ${count === 4 ? 'role' : 'roles'} left to fill.`}</p>
      <TeamSummary team={team} />
    </section>
  )
}
