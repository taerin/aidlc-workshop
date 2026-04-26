import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { AuthForm } from '../components/AuthForm';

export function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (email, password) => {
    await register(email, password);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">회원가입</h1>
        <AuthForm mode="register" onSubmit={handleRegister} />
        <p className="text-center text-sm text-zinc-500 mt-4">
          이미 계정이 있으신가요? <Link to="/login" className="text-zinc-900 underline" data-testid="register-login-link">로그인</Link>
        </p>
      </div>
    </div>
  );
}
