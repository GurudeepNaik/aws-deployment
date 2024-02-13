import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const todos: Todo[] = [
  {
    id: 1,
    title: "Todo 1",
    description: "This is todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "This is todo 2",
    completed: false,
  },
  {
    id: 3,
    title: "Todo 3",
    description: "This is todo 3",
    completed: false,
  },
  {
    id: 4,
    title: "Todo 4",
    description: "This is todo 4",
    completed: false,
  },
  {
    id: 5,
    title: "Todo 5",
    description: "This is todo 5",
    completed: false,
  },
];

app.get("/todo", (req: Request, res: Response) => {
  const todoId = parseInt(req.query.id as string);
  const todo = todos.find((t) => t.id === todoId);
  res.json({ todo });
});

app.get("/todos", (req: Request, res: Response) => {
  const randomTodos: Todo[] = [];
  for (let i = 0; i < 5; i++) {
    if (Math.random() > 0.5) {
      randomTodos.push(todos[i]);
    }
  }
  res.json({ todos: randomTodos });
});

app.get("/sum", (req: Request, res: Response) => {
  const a = parseInt(req.query.a as string);
  const b = parseInt(req.query.b as string);
  const sum = a + b;
  res.send(sum.toString());
});

app.get("/interest", (req: Request, res: Response) => {
  const principal = parseInt(req.query.principal as string);
  const rate = parseInt(req.query.rate as string);
  const time = parseInt(req.query.time as string);
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  res.send({ total, interest });
});

function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max);
}

app.get("/notifications", (req: Request, res: Response) => {
  res.json({
    network: getRandomNumber(10),
    jobs: getRandomNumber(10),
    messaging: getRandomNumber(10),
    notifications: getRandomNumber(10),
  });
});

app.listen(8080, () => {
  console.log("running at 8080");
});
