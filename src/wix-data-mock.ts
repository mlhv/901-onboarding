type TeamRow = { _id: string; teamName: string; school: string; approved: boolean };

const mockTeams: Record<string, TeamRow> = {
  '1': { _id: '1', teamName: 'Team A', school: 'School A', approved: true },
  '2': { _id: '2', teamName: 'Team B', school: 'School B', approved: false },
  '3': { _id: '3', teamName: 'Team C', school: 'School C', approved: true },
  '4': { _id: '4', teamName: 'Team D', school: 'School D', approved: false },
  '5': { _id: '5', teamName: 'Team E', school: 'School E', approved: true },
};

async function get(
  collectionId: string, 
  itemId: string
): Promise<TeamRow | null> {  
  const team = mockTeams[itemId];  
  if (team) {    
    return team;  
  }  
  return null;
}

export default {  
  get,
};
