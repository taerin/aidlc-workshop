import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function TodoInput({ onAdd }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return setError('제목을 입력해주세요');
    setError('');
    try {
      await onAdd(title.trim());
      setTitle('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2" data-testid="todo-input-form">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="할 일을 입력하세요"
        data-testid="todo-title-input"
      />
      <Button type="submit" data-testid="todo-add-button">추가</Button>
      {error && <p className="text-red-500 text-sm self-center">{error}</p>}
    </form>
  );
}
