import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Settings, LogOut, Edit3, Save, X } from 'lucide-react';
import './UserProfile.css';

const UserProfile: React.FC = () => {
  const { user, logout, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  if (!user) return null;

  const handleSave = async () => {
    try {
      await updateProfile(editForm);
      setIsEditing(false);
    } catch (error) {
      console.error('프로필 업데이트 실패:', error);
    }
  };

  const handleCancel = () => {
    setEditForm({
      name: user.name,
      email: user.email,
    });
    setIsEditing(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-avatar">
          <User size={32} />
        </div>
        <div className="profile-info">
          {isEditing ? (
            <div className="edit-form">
              <input
                type="text"
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                placeholder="이름"
                className="edit-input"
              />
              <input
                type="email"
                value={editForm.email}
                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                placeholder="이메일"
                className="edit-input"
              />
            </div>
          ) : (
            <>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <small>가입일: {formatDate(user.createdAt)}</small>
            </>
          )}
        </div>
        <div className="profile-actions">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="save-btn" title="저장">
                <Save size={16} />
              </button>
              <button onClick={handleCancel} className="cancel-btn" title="취소">
                <X size={16} />
              </button>
            </>
          ) : (
            <button onClick={() => setIsEditing(true)} className="edit-btn" title="수정">
              <Edit3 size={16} />
            </button>
          )}
          <button onClick={logout} className="logout-btn" title="로그아웃">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

