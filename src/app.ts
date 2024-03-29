import express, { Application, Request, Response } from 'express';
import config from './config/config';
import { db } from './loaders/dbConnect';
import userRoutes from './api/routes/userRoutes';
import cors from 'cors';
import categoryRoutes from "./api/routes/categoryRoutes"
import cookieParser from "cookie-parser";
import isAuth from './api/routes/middlewares/isAuth';
import budgetRoutes from "./api/routes/budgetRoutes"
import incomeRoute from "./api/routes/transactionRoutes"
const app: Application = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true, // if your frontend sends credentials (e.g., cookies)
}));


app.use(cookieParser());

app.use('/api/v1', userRoutes);
app.use('/api/v1',isAuth,categoryRoutes);
app.use('/api/v1', isAuth, budgetRoutes);
app.use("/api/v1", isAuth, incomeRoute)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, how are you?');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong.');
});

function startServer() {
  try {
    db();
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
}

startServer();