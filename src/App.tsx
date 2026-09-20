import TeamList from './TeamList'
import './App.css'

function App() {

  const teams = [
    {
      id: '1',
      teamName: 'Team A',
      school: 'School A'
    },
    {
      id: '2',
      teamName: 'Team B',
      school: 'School B'
    },
    {
      id: '3',
      teamName: 'Team C',
      school: 'School C'
    },
    {
      id: '4',
      teamName: 'Team D',
      school: 'School D'
    },
    {
      id: '5',
      teamName: 'Team E',
      school: 'School E'
    }
  ]

  return (
      <TeamList teams={teams} />
  )
}

export default App
