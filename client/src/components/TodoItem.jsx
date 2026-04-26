import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function TodoItem({ todo, onToggle, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleSave = async () => {
    if (!title.trim()) return;
    await onUpdate(todo.id, { title: title.trim() });
    setEditing(false);
  };

  const handleCancel = () => {
    setTitle(todo.title);
    setEditing(false);
  };

  return (
    <li className="flex items-center gap-3 p-3 border border-zinc-200 rounded-md" data-testid={`todo-item-${todo.id}`}>
      <input
        type="checkbox"
        checked={!!todo.completed}
        onChange={() => onToggle(todo.id, !todo.completed)}
        className="h-5 w-5 cursor-pointer"
        data-testid={`todo-checkbox-${todo.id}`}
      />
      {editing ? (
        <div className="flex-1 flex gap-2">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} data-testid={`todo-edit-input-${todo.id}`} />
          <Button size="sm" onClick={handleSave} data-testid={`todo-save-button-${todo.id}`}>저장</Button>
          <Button size="sm" variant="ghost" onClick={handleCancel}>취소</Button>
        </div>
      ) : (
        <>
          <span
            className={`flex-1 ${todo.completed ? 'line-through text-zinc-400' : ''}`}
            data-testid={`todo-title-${todo.id}`}
          >
            {todo.title}
          </span>
          <Button size="sm" variant="ghost" onClick={() => setEditing(true)} data-testid={`todo-edit-button-${todo.id}`}>수정</Button>
          <Button size="sm" variant="destructive" onClick={() => onDelete(todo.id)} data-testid={`todo-delete-button-${todo.id}`}>삭제</Button>
        </>
      )}
    </li>
  );
}
