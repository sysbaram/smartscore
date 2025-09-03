import { useState, useEffect } from 'react';
import { GolfRound } from './types/golf';
import { useAuth } from './contexts/AuthContext';
import RoundForm from './components/RoundForm';
import RoundList from './components/RoundList';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [rounds, setRounds] = useState<GolfRound[]>([]);
  const [activeTab, setActiveTab] = useState<'form' | 'list'>('form');

  useEffect(() => {
    if (isAuthenticated && user) {
      // 사용자별 데이터 로드
      const userDataKey = `golfRounds_${user.id}`;
      const savedRounds = localStorage.getItem(userDataKey);
      if (savedRounds) {
        setRounds(JSON.parse(savedRounds));
      } else {
        setRounds([]);
      }
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (isAuthenticated && user) {
      // 사용자별 데이터 저장
      const userDataKey = `golfRounds_${user.id}`;
      localStorage.setItem(userDataKey, JSON.stringify(rounds));
    }
  }, [rounds, isAuthenticated, user]);

  const addRound = (round: GolfRound) => {
    setRounds([...rounds, round]);
    setActiveTab('list');
  };

  const deleteRound = (id: string) => {
    setRounds(rounds.filter(round => round.id !== id));
  };

  if (isLoading) {
    return (
      <div className="app loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>로딩 중...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🏌️ SmartScore</h1>
        <p>골프 라운드 스코어 관리 시스템</p>
      </header>

      <UserProfile />

      <nav className="app-nav">
        <button 
          className={activeTab === 'form' ? 'active' : ''} 
          onClick={() => setActiveTab('form')}
        >
          새 라운드 기록
        </button>
        <button 
          className={activeTab === 'list' ? 'active' : ''} 
          onClick={() => setActiveTab('list')}
        >
          라운드 목록
        </button>
      </nav>

      <main className="app-main">
        {activeTab === 'form' && <RoundForm onAddRound={addRound} />}
        {activeTab === 'list' && <RoundList rounds={rounds} onDeleteRound={deleteRound} />}
      </main>
    </div>
  );
}

export default App;
