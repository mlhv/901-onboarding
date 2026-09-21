import type { Team } from './types';
import { useState } from 'react';
import TeamCard from './TeamCard';

type TeamListProps = {
    teams: Team[];
    attributes: Record<string, string | null>;
    dispatch: (eventName: string, detail?: unknown) => void;
}

export default function TeamList( { teams, attributes, dispatch }: TeamListProps) {
    const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
    const selectedTeam = teams.find(team => team.id === selectedTeamId);

    function handleSelect(team: Team) {
        setSelectedTeamId(team.id);
        dispatch('requestTeamStatus', { teamId: team.id });
    }

    const rawStatus = attributes['team-status'];
    const status = rawStatus ? JSON.parse(rawStatus) : null;

    return (
        <div className="team-list">
            <p>Selected: {selectedTeam ? selectedTeam.teamName : "none"}</p>
            {selectedTeamId !== null && (
                status && status.id === selectedTeamId ? (
                    <p>{status.approved ? 'Approved' : 'Pending Approval'}</p>
                ) : (
                    <p>Loading...</p>
                )
            )}

            {teams.length === 0 ? (
                <p>No teams yet</p>
            ) : (
                teams.map((team) => 
                <TeamCard key={team.id} 
                team={team} 
                isSelected={selectedTeamId === team.id} 
                onSelect={() => handleSelect(team)} />)
            )}
        </div>
    );
}