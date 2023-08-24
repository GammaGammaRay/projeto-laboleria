import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { IndexRouter } from './routes/router.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(IndexRouter);

const port = process.env.PORT || 5000
app.listen(port,()=>{ console.log(`RUNNING IN PORT ${port}`)});