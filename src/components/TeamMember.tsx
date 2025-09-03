import type { TeamMemberType } from "./content/team";

const TeamMember = ({ teamMember }: { teamMember: TeamMemberType }) => {
    return (
        <div className="team-member">
            <img className="team-member-image" src={teamMember.image} alt={teamMember.name} />
            <div className="team-member-info">
                <h3 className="team-member-name">{teamMember.name}</h3>
                <p className="team-member-role">{teamMember.role}</p>
                <p className="team-member-about">{teamMember.about}</p>
                <p className="team-member-phrase">{teamMember.phrase}</p>
            </div>
        </div>
    )
}

export default TeamMember;