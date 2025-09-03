export type CourseType = {
    name: string;
    description: string;
    course_duration: string;
    content: string;
    level: string;
    date_start: string;
    week_days: string;
}

const courses: CourseType[] = [
    {
        name: "Bug Busters 101 🐞",
        description: "Turn coding mistakes into victories! Kids learn how to spot, fix, and even laugh at bugs in their code.",
        course_duration: "4 weeks",
        content: "Basic programming concepts, debugging, problem-solving through games.",
        level: "Beginner",
        date_start: "15/09/2025",
        week_days: "Mon & Wed"
    },
    {
        name: "Pixel Pioneers 🎨",
        description: "A creative journey where kids design their own colorful worlds and characters using code.",
        course_duration: "6 weeks",
        content: "Intro to graphics, sprites, and simple game design.",
        level: "Beginner",
        date_start: "22/09/2025",
        week_days: "Tue & Thu"
    },
    {
        name: "Wizard of Loops 🔁",
        description: "Master the magic of loops and conditionals to make code do tricks again and again!",
        course_duration: "5 weeks",
        content: "Loops, conditionals, coding challenges, and mini projects.",
        level: "Intermediate",
        date_start: "01/10/2025",
        week_days: "Mon & Fri"
    },
    {
        name: "Hack the Adventure 🚀",
        description: "Kids create their own interactive stories and adventure games powered by code.",
        course_duration: "6 weeks",
        content: "Storytelling with coding, interactive inputs, basic logic.",
        level: "Intermediate",
        date_start: "10/10/2025",
        week_days: "Wed & Fri"
    },
    {
        name: "Code & Cookies 🍪",
        description: "A cozy camp where coding is paired with creativity, teamwork, and maybe a cookie or two.",
        course_duration: "4 weeks",
        content: "Fun group projects, intro to collaboration tools, pair programming.",
        level: "All levels",
        date_start: "20/10/2025",
        week_days: "Tue & Thu"
    },
    {
        name: "Superhero Coders 🦸",
        description: "Unleash your inner hero! Kids build projects that ‘save the day’ using their new coding superpowers.",
        course_duration: "5 weeks",
        content: "Project-based learning, problem-solving, building small apps or games.",
        level: "Advanced",
        date_start: "01/11/2025",
        week_days: "Sat"
    }
]

export default courses;