import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { AuthForm } from '../components/AuthForm';

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    await login(email, password);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <p className="text-center text-sm text-zinc-500 mt-4">
          계정이 없으신가요? <Link to="/register" className="text-zinc-900 underline" data-testid="login-register-link">회원가입</Link>
        </p>
      </div>
    </div>
  );
}
