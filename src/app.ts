import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// ----------- parser include --------------
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 20;

  res.send(a);
});

console.log(process.cwd());

export default app;
