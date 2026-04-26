import { Button } from './ui/button';

const FILTERS = [
  { key: 'all', label: '전체' },
  { key: 'active', label: '미완료' },
  { key: 'completed', label: '완료' },
];

export function TodoFilter({ current, onChange }) {
  return (
    <div className="flex gap-2" data-testid="todo-filter">
      {FILTERS.map(({ key, label }) => (
        <Button
          key={key}
          variant={current === key ? 'default' : 'outline'}
          size="sm"
          onClick={() => onChange(key)}
          data-testid={`todo-filter-${key}`}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}
