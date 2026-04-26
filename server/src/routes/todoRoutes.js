import { Router } from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import * as todoService from '../services/todoService.js';

const router = Router();

router.use(authenticate);

router.get('/', (req, res) => {
  const todos = todoService.getAllByUser(req.userId);
  res.json(todos);
});

router.post('/', (req, res) => {
  try {
    const todo = todoService.create(req.userId, req.body.title);
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', (req, res) => {
  try {
    const todo = todoService.update(Number(req.params.id), req.userId, req.body);
    res.json(todo);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    todoService.remove(Number(req.params.id), req.userId);
    res.json({ message: '삭제되었습니다' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

export default router;
