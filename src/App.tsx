import TeamCard from './TeamCard'
import type { Team } from './types'
import './App.css'

function App() {
  const team: Team = {
    id: '1',
    teamName: 'Team A',
    school: 'School A'
  }

  return (
      <TeamCard team={team} />
  )
}

export default App
