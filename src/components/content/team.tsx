import john_doe from "../../assets/team/john_doe.png";
import jane_doe from "../../assets/team/jane_doe.png";
import alice_johnson from "../../assets/team/alice_johnson.png";
import bob_smith from "../../assets/team/bob_smith.png";
import charlie_brown from "../../assets/team/charlie_brown.png";

export type TeamMemberType = {
    name: string;
    role: string;
    image: string;
    about: string;
    phrase: string;
}

const team: TeamMemberType[] = [
    {
        name: "John Doe",
        role: "Frontend Developer",
        image: john_doe,
        about: "John is passionate about building colorful, interactive websites and loves showing kids how fun coding can be.",
        phrase: "I love coding and I love teaching children to code."
    },
    {
        name: "Jane Doe",
        role: "Backend Developer",
        image: jane_doe,
        about: "Jane enjoys solving puzzles with code and creating the engines that make apps run smoothly behind the scenes.",
        phrase: "Never give up on your dreams."
    },
    {
        name: "Alice Johnson",
        role: "Designer",
        image: alice_johnson,
        about: "Alice brings ideas to life with bright visuals and creative designs that inspire young learners.",
        phrase: "Be the change you want to see in the world."
    },
    {
        name: "Bob Smith",
        role: "Backend Developer",
        image: bob_smith,
        about: "Bob loves coding challenges and believes teamwork is the best way to build amazing projects.",
        phrase: "The only way to do great work is to love what you do."
    },
    {
        name: "Charlie Brown",
        role: "Designer",
        image: charlie_brown,
        about: "Charlie makes technology friendly and fun through playful designs that kids can easily enjoy.",
        phrase: "If you can dream it, you can do it."
    }
]


export default team;