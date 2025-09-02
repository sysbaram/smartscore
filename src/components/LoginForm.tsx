import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LoginCredentials, RegisterCredentials } from '../types/auth';
import { Mail, Lock, User, Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';
import './LoginForm.css';

const LoginForm: React.FC = () => {
  const { login, register, isLoading } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  
  const [loginForm, setLoginForm] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

  const [registerForm, setRegisterForm] = useState<RegisterCredentials>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(loginForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : '로그인에 실패했습니다.');
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await register(registerForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : '회원가입에 실패했습니다.');
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setError('');
    setLoginForm({ email: '', password: '' });
    setRegisterForm({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>🏌️ SmartScore</h1>
          <p>{isLoginMode ? '로그인하여 시작하기' : '새 계정 만들기'}</p>
        </div>

        <div className="auth-tabs">
          <button
            className={isLoginMode ? 'active' : ''}
            onClick={() => setIsLoginMode(true)}
          >
            <LogIn size={16} />
            로그인
          </button>
          <button
            className={!isLoginMode ? 'active' : ''}
            onClick={() => setIsLoginMode(false)}
          >
            <UserPlus size={16} />
            회원가입
          </button>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {isLoginMode ? (
          <form onSubmit={handleLoginSubmit} className="auth-form">
            <div className="form-group">
              <label>
                <Mail size={16} />
                이메일
              </label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                placeholder="이메일을 입력하세요"
                required
              />
            </div>

            <div className="form-group">
              <label>
                <Lock size={16} />
                비밀번호
              </label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  placeholder="비밀번호를 입력하세요"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit-btn" disabled={isLoading}>
              {isLoading ? '로그인 중...' : '로그인'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="auth-form">
            <div className="form-group">
              <label>
                <User size={16} />
                이름
              </label>
              <input
                type="text"
                value={registerForm.name}
                onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                placeholder="이름을 입력하세요"
                required
              />
            </div>

            <div className="form-group">
              <label>
                <Mail size={16} />
                이메일
              </label>
              <input
                type="email"
                value={registerForm.email}
                onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                placeholder="이메일을 입력하세요"
                required
              />
            </div>

            <div className="form-group">
              <label>
                <Lock size={16} />
                비밀번호
              </label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                  placeholder="비밀번호를 입력하세요 (최소 6자)"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>
                <Lock size={16} />
                비밀번호 확인
              </label>
              <div className="password-input">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={registerForm.confirmPassword}
                  onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                  placeholder="비밀번호를 다시 입력하세요"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit-btn" disabled={isLoading}>
              {isLoading ? '가입 중...' : '회원가입'}
            </button>
          </form>
        )}

        <div className="auth-footer">
          <p>
            {isLoginMode ? '계정이 없으신가요?' : '이미 계정이 있으신가요?'}
            <button onClick={toggleMode} className="toggle-mode-btn">
              {isLoginMode ? '회원가입' : '로그인'}
            </button>
          </p>
        </div>

        <div className="demo-info">
          <h4>🎯 데모 계정</h4>
          <p><strong>이메일:</strong> demo@smartscore.com</p>
          <p><strong>비밀번호:</strong> demo123</p>
          <small>위 계정으로 바로 체험해보세요!</small>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

