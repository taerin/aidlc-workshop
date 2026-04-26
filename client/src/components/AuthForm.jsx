import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function AuthForm({ mode, onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!email) return '이메일을 입력해주세요';
    if (!/\S+@\S+\.\S+/.test(email)) return '올바른 이메일 형식이 아닙니다';
    if (!password) return '비밀번호를 입력해주세요';
    if (password.length < 6) return '비밀번호는 6자 이상이어야 합니다';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) return setError(validationError);

    setError('');
    setLoading(true);
    try {
      await onSubmit(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm" data-testid="auth-form">
      <div>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-testid="auth-email-input"
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-testid="auth-password-input"
        />
      </div>
      {error && <p className="text-red-500 text-sm" data-testid="auth-error">{error}</p>}
      <Button type="submit" className="w-full" disabled={loading} data-testid="auth-submit-button">
        {loading ? '처리 중...' : mode === 'login' ? '로그인' : '회원가입'}
      </Button>
    </form>
  );
}
