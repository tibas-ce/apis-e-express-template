import express, { Request, Response } from 'express';
import cors from 'cors';
import { courses, students } from './database';
import { TCourse, TStudent } from './types';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!');
});

//endpoint acessar todos os cursos (getAllCourses)
app.get("/courses", (req: Request, res: Response) => {
    res.status(200).send(courses);
});

//endpoint buscar curso por nome (getCourseByName)
app.get("/courses/search", (req: Request, res: Response) => {
    const q = req.query.q as string;

    const result: TCourse[] = courses.filter(course => course.name.toLowerCase().includes(q.toLowerCase()));

    res.status(200).send(result);
});

//end point criar curso createCourse
app.post("/courses", (req: Request, res: Response) => {
    // const id = req.body.id.id as string;
    // const name = req.body.name.name as string;
    // const lessons = req.body.lessons.lessons as number;
    // const stack = req.body.stack as COURSE_STACK;

    const {id, name, lessons, stack}: TCourse = req.body;

    const newCourse: TCourse = {
        id,
        name,
        lessons,
        stack
    };

    courses.push(newCourse);
    res.status(201).send("Curso registrado com sucesso!");
});

//exercício de fixação
//endpoint acessar todos os usuários (getAllStudent)
app.get("/students", (req: Request, res: Response) => {
    res.status(200).send(students);
});

//endpoint buscar usuário por nome (getUserByName)
app.get("/students/search", (req: Request, res: Response) => {
    const q = req.query.q as string;

    const result: TStudent[] = students.filter(student => student.name.toLowerCase().includes(q.toLowerCase()));

    res.status(200).send(result);
});

//endpoint criar usuário createUser
app.post("/students", (req: Request, res: Response) => {
    const {id, name, age}: TStudent = req.body;

    const newStudent: TStudent = {
        id,
        name,
        age
    };

    students.push(newStudent);
    res.status(201).send("Estudante registrado com sucesso!");
});