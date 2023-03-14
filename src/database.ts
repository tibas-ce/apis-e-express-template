import { COURSE_STACK, TCourse, TStudent } from "./types"

export const courses: TCourse[] = [
    {
        id: "c001",
        name: "React",
        lessons: 12,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c002",
        name: "Styled Components",
        lessons: 4,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c003",
        name: "Express",
        lessons: 5,
        stack: COURSE_STACK.BACK
    }
];

export const students: TStudent[] = [
    {
        id: "s001",
        name: "Jimi Hendrix",
        age: 27
    },
    {
        id: "s002",
        name: "Han Solo",
        age: 63
    }
];