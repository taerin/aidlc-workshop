import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { todoService } from '../services/todoService';
import { TodoInput } from '../components/TodoInput';
import { TodoList } from '../components/TodoList';
import { TodoFilter } from '../components/TodoFilter';
import { Button } from '../components/ui/button';

export function TodoPage() {
  const { logout } = useAuth();
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    todoService.getAll().then(setTodos);
  }, []);

  const addTodo = async (title) => {
    const todo = await todoService.create(title);
    setTodos((prev) => [todo, ...prev]);
  };

  const toggleTodo = async (id, completed) => {
    const updated = await todoService.update(id, { completed });
    setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
  };

  const updateTodo = async (id, updates) => {
    const updated = await todoService.update(id, updates);
    setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
  };

  const deleteTodo = async (id) => {
    await todoService.remove(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const filtered = todos.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">TODO List</h1>
        <Button variant="ghost" onClick={logout} data-testid="logout-button">로그아웃</Button>
      </header>
      <main className="max-w-2xl mx-auto p-6 space-y-6">
        <TodoInput onAdd={addTodo} />
        <TodoFilter current={filter} onChange={setFilter} />
        <TodoList todos={filtered} onToggle={toggleTodo} onUpdate={updateTodo} onDelete={deleteTodo} />
      </main>
    </div>
  );
}
