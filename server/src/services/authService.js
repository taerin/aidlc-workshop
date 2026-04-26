import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as userModel from '../models/userModel.js';

const JWT_SECRET = process.env.JWT_SECRET || 'todo-app-secret-key';

export async function register(email, password) {
  const existing = userModel.findByEmail(email);
  if (existing) throw new Error('이미 사용 중인 이메일입니다');

  const hashedPassword = await bcrypt.hash(password, 10);
  return userModel.create(email, hashedPassword);
}

export async function login(email, password) {
  const user = userModel.findByEmail(email);
  if (!user) throw new Error('이메일 또는 비밀번호가 올바르지 않습니다');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('이메일 또는 비밀번호가 올바르지 않습니다');

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '24h' });
  return { token };
}

export { JWT_SECRET };
