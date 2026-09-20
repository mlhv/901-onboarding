import type { Team } from './types';

type TeamCardProps = {
    team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
    return (
        <div className="team-card">
            <h3>{team.teamName}</h3>
            <p>{team.school}</p>
        </div>
    )
}