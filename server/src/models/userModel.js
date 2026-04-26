import db from '../db.js';

export function create(email, hashedPassword) {
  const stmt = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)');
  const result = stmt.run(email, hashedPassword);
  return { id: result.lastInsertRowid, email };
}

export function findByEmail(email) {
  const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
  return stmt.get(email);
}
