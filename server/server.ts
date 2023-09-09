import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express Server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
