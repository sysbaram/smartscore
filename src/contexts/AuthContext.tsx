import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType, LoginCredentials, RegisterCredentials } from '../types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 데모 계정 초기화
    const initializeDemoAccount = () => {
      const users = JSON.parse(localStorage.getItem('smartscore_users') || '[]');
      const demoExists = users.find((u: any) => u.email === 'demo@smartscore.com');
      
      if (!demoExists) {
        const demoUser = {
          id: 'demo-user-001',
          email: 'demo@smartscore.com',
          name: '데모 사용자',
          password: 'demo123',
          createdAt: new Date().toISOString(),
        };
        users.push(demoUser);
        localStorage.setItem('smartscore_users', JSON.stringify(users));
      }
    };

    initializeDemoAccount();

    // 페이지 로드 시 저장된 사용자 정보 확인
    const savedUser = localStorage.getItem('smartscore_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (error) {
        console.error('Failed to parse saved user data:', error);
        localStorage.removeItem('smartscore_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials): Promise<void> => {
    setIsLoading(true);
    
    try {
      // 저장된 사용자 데이터에서 이메일/비밀번호 확인
      const users = JSON.parse(localStorage.getItem('smartscore_users') || '[]');
      const foundUser = users.find((u: any) => u.email === credentials.email);
      
      if (!foundUser) {
        throw new Error('사용자를 찾을 수 없습니다.');
      }
      
      if (foundUser.password !== credentials.password) {
        throw new Error('비밀번호가 틀렸습니다.');
      }

      // 비밀번호 제거한 사용자 정보
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('smartscore_user', JSON.stringify(userWithoutPassword));
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (credentials: RegisterCredentials): Promise<void> => {
    setIsLoading(true);
    
    try {
      if (credentials.password !== credentials.confirmPassword) {
        throw new Error('비밀번호가 일치하지 않습니다.');
      }

      if (credentials.password.length < 6) {
        throw new Error('비밀번호는 최소 6자 이상이어야 합니다.');
      }

      // 이메일 중복 확인
      const users = JSON.parse(localStorage.getItem('smartscore_users') || '[]');
      const existingUser = users.find((u: any) => u.email === credentials.email);
      
      if (existingUser) {
        throw new Error('이미 사용 중인 이메일입니다.');
      }

      // 새 사용자 생성
      const newUser = {
        id: Date.now().toString(),
        email: credentials.email,
        name: credentials.name,
        password: credentials.password, // 실제 서비스에서는 해시화 필요
        createdAt: new Date().toISOString(),
      };

      // 사용자 목록에 추가
      users.push(newUser);
      localStorage.setItem('smartscore_users', JSON.stringify(users));

      // 로그인 처리
      const { password, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      localStorage.setItem('smartscore_user', JSON.stringify(userWithoutPassword));
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('smartscore_user');
  };

  const updateProfile = async (userData: Partial<User>): Promise<void> => {
    if (!user) return;

    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    localStorage.setItem('smartscore_user', JSON.stringify(updatedUser));

    // 사용자 목록에서도 업데이트
    const users = JSON.parse(localStorage.getItem('smartscore_users') || '[]');
    const userIndex = users.findIndex((u: any) => u.id === user.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...userData };
      localStorage.setItem('smartscore_users', JSON.stringify(users));
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
