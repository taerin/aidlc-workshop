import * as todoModel from '../models/todoModel.js';

export function getAllByUser(userId) {
  return todoModel.findAllByUserId(userId);
}

export function create(userId, title) {
  if (!title || !title.trim()) throw new Error('제목을 입력해주세요');
  return todoModel.create(userId, title.trim());
}

export function update(id, userId, updates) {
  if (updates.title !== undefined && !updates.title.trim()) {
    throw new Error('제목을 입력해주세요');
  }
  const todo = todoModel.update(id, userId, updates);
  if (!todo) throw new Error('TODO를 찾을 수 없습니다');
  return todo;
}

export function remove(id, userId) {
  const deleted = todoModel.remove(id, userId);
  if (!deleted) throw new Error('TODO를 찾을 수 없습니다');
}
