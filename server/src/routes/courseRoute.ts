import { Router } from 'express';
import courses from '../../data/courses.json';

const router = Router();

router.get('/', (req, res) => {
  res.json(courses);
});

export default router;
