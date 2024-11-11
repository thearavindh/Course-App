import express from 'express';
import cors from 'cors';
import coursesRoute from './routes/coursesRoute';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/courses', coursesRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
