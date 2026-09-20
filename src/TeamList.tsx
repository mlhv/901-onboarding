import type { Team } from './types';
import TeamCard from './TeamCard';

export default function TeamList( { teams }: { teams: Team[] }) {
    return (
        <div className="team-list">
            {teams.length === 0 ? (
                <p>No teams yet</p>
            ) : (
            teams.map((team) => <TeamCard key={team.id} team={team} />)
            )}
        </div>
    );
}