import type { Team } from './types';
import { useState } from 'react';
import TeamCard from './TeamCard';

export default function TeamList( { teams }: { teams: Team[] }) {
    const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
    const selectedTeam = teams.find(team => team.id === selectedTeamId);
    
    return (
        <div className="team-list">
            <p>Selected: {selectedTeam ? selectedTeam.teamName : "none"}</p>

            {teams.length === 0 ? (
                <p>No teams yet</p>
            ) : (
                teams.map((team) => 
                <TeamCard key={team.id} 
                team={team} 
                isSelected={selectedTeamId === team.id} 
                onSelect={() => setSelectedTeamId(team.id)} />)
            )}
        </div>
    );
}