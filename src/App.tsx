import TeamList from './TeamList'
import { getTeamStatus } from './getTeamStatus';
import { useState } from 'react';
import './App.css'

function App() {
  const [teamStatusAttr, setTeamStatusAttr] = useState<string | null>(null);

  function dispatch(eventName: string, detail: any) {
    if (eventName === 'requestTeamStatus') {
      getTeamStatus(detail.teamId).then((result) => {
        setTeamStatusAttr(JSON.stringify(result));
      });
    }
  }

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
      <TeamList 
      teams={teams}
      attributes={{ 'team-status': teamStatusAttr }}
      dispatch={dispatch}
      />
  )
}

export default App
