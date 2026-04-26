import { TodoItem } from './TodoItem';

export function TodoList({ todos, onToggle, onUpdate, onDelete }) {
  if (todos.length === 0) {
    return <p className="text-center text-zinc-400 py-8" data-testid="todo-empty-message">할 일이 없습니다</p>;
  }

  return (
    <ul className="space-y-2" data-testid="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </ul>
  );
}
