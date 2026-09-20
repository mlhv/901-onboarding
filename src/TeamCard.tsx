import type { Team } from './types';

type TeamCardProps = {
    team: Team;
    isSelected: boolean;
    onSelect: () => void;
}

export default function TeamCard({ team, isSelected, onSelect }: TeamCardProps) {
    return (
        <div className={isSelected ? "team-card selected" : "team-card"}
             onClick={onSelect}
        >
            <h3>{team.teamName}</h3>
            <p>{team.school}</p>
        </div>
    )
}