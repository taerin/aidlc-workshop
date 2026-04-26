import db from '../db.js';

export function findAllByUserId(userId) {
  return db.prepare('SELECT * FROM todos WHERE user_id = ? ORDER BY created_at DESC').all(userId);
}

export function create(userId, title) {
  const stmt = db.prepare('INSERT INTO todos (user_id, title) VALUES (?, ?)');
  const result = stmt.run(userId, title);
  return db.prepare('SELECT * FROM todos WHERE id = ?').get(result.lastInsertRowid);
}

export function update(id, userId, updates) {
  const todo = db.prepare('SELECT * FROM todos WHERE id = ? AND user_id = ?').get(id, userId);
  if (!todo) return null;

  const title = updates.title !== undefined ? updates.title : todo.title;
  const completed = updates.completed !== undefined ? (updates.completed ? 1 : 0) : todo.completed;

  db.prepare('UPDATE todos SET title = ?, completed = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? AND user_id = ?')
    .run(title, completed, id, userId);

  return db.prepare('SELECT * FROM todos WHERE id = ?').get(id);
}

export function remove(id, userId) {
  const result = db.prepare('DELETE FROM todos WHERE id = ? AND user_id = ?').run(id, userId);
  return result.changes > 0;
}
