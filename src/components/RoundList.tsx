import React, { useState } from 'react';
import { GolfRound } from '../types/golf';
import { format } from 'date-fns';
import { Search, Trash2, Eye, Calendar, MapPin, Users, Target, Flag } from 'lucide-react';
import './RoundList.css';

interface RoundListProps {
  rounds: GolfRound[];
  onDeleteRound: (id: string) => void;
}

const RoundList: React.FC<RoundListProps> = ({ rounds, onDeleteRound }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('');
  const [filterCompanion, setFilterCompanion] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'score' | 'regularOn' | 'twoPutt'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedRound, setSelectedRound] = useState<GolfRound | null>(null);

  const filteredRounds = rounds
    .filter(round => {
      const matchesSearch = round.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           round.companions.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCourse = !filterCourse || round.course === filterCourse;
      const matchesCompanion = !filterCompanion || round.companions.includes(filterCompanion);
      
      return matchesSearch && matchesCourse && matchesCompanion;
    })
    .sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
          break;
        case 'score':
          aValue = a.totalScore;
          bValue = b.totalScore;
          break;
        case 'regularOn':
          aValue = a.regularOnCount;
          bValue = b.regularOnCount;
          break;
        case 'twoPutt':
          aValue = a.twoPuttCount;
          bValue = b.twoPuttCount;
          break;
        default:
          aValue = new Date(a.date).getTime();
          bValue = new Date(b.date).getTime();
      }
      
      if (sortOrder === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });

  const uniqueCourses = Array.from(new Set(rounds.map(r => r.course)));
  const allCompanions = Array.from(new Set(rounds.flatMap(r => r.companions)));

  const handleSort = (field: 'date' | 'score' | 'regularOn' | 'twoPutt') => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const handleViewDetails = (round: GolfRound) => {
    setSelectedRound(round);
  };

  const closeModal = () => {
    setSelectedRound(null);
  };

  const getScoreClass = (score: number) => {
    if (score === 0) return 'score-par';
    if (score === 1) return 'score-bogey';
    if (score >= 2) return 'score-double';
    return 'score-birdie';
  };



  const calculateToParTotal = (startHole: number, endHole: number, holes: any[]) => {
    return holes
      .filter(hole => hole.holeNumber >= startHole && hole.holeNumber <= endHole)
      .reduce((total, hole) => total + hole.score, 0);
  };

  if (rounds.length === 0) {
    return (
      <div className="round-list empty">
        <h2>저장된 라운드가 없습니다</h2>
        <p>새 라운드를 기록해보세요!</p>
      </div>
    );
  }

  return (
    <div className="round-list">
      <h2>라운드 목록</h2>
      
      <div className="filters">
        <div className="search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="골프장명 또는 동반자로 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-controls">
          <select
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
          >
            <option value="">모든 골프장</option>
            {uniqueCourses.map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
          
          <select
            value={filterCompanion}
            onChange={(e) => setFilterCompanion(e.target.value)}
          >
            <option value="">모든 동반자</option>
            {allCompanions.map(companion => (
              <option key={companion} value={companion}>{companion}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="sort-controls">
        <span>정렬:</span>
        <button
          className={sortBy === 'date' ? 'active' : ''}
          onClick={() => handleSort('date')}
        >
          날짜 {sortBy === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
        </button>
        <button
          className={sortBy === 'score' ? 'active' : ''}
          onClick={() => handleSort('score')}
        >
          스코어 {sortBy === 'score' && (sortOrder === 'asc' ? '↑' : '↓')}
        </button>
        <button
          className={sortBy === 'regularOn' ? 'active' : ''}
          onClick={() => handleSort('regularOn')}
        >
          Regular On {sortBy === 'regularOn' && (sortOrder === 'asc' ? '↑' : '↓')}
        </button>
        <button
          className={sortBy === 'twoPutt' ? 'active' : ''}
          onClick={() => handleSort('twoPutt')}
        >
          2 Putt {sortBy === 'twoPutt' && (sortOrder === 'asc' ? '↑' : '↓')}
        </button>
      </div>

      <div className="rounds-grid">
        {filteredRounds.map(round => (
          <div key={round.id} className="round-card">
            <div className="round-header">
              <div className="round-date">
                <Calendar size={16} />
                {format(new Date(round.date), 'yyyy년 MM월 dd일')}
              </div>
              <button
                onClick={() => onDeleteRound(round.id)}
                className="delete-btn"
                title="삭제"
              >
                <Trash2 size={16} />
              </button>
            </div>
            
            <div className="round-course">
              <MapPin size={16} />
              {round.course}
            </div>
            
            <div className="round-companions">
              <Users size={16} />
              {round.companions.length > 0 ? round.companions.join(', ') : '혼자'}
            </div>
            
            <div className="round-stats">
              <div className="stat-item">
                <Target size={16} />
                <span>총 스코어: {round.totalScore}</span>
              </div>
              <div className="stat-item">
                <Flag size={16} />
                <span>Regular On: {round.regularOnCount}/18</span>
              </div>
              <div className="stat-item">
                <Flag size={16} />
                <span>2 Putt: {round.twoPuttCount}/18</span>
              </div>
              <div className="stat-item">
                <Flag size={16} />
                <span>OB: {round.obCount}</span>
              </div>
              <div className="stat-item">
                <Flag size={16} />
                <span>PA: {round.paCount}</span>
              </div>
            </div>
            
            <div className="round-actions">
              <button className="view-btn" onClick={() => handleViewDetails(round)}>
                <Eye size={16} />
                상세보기
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="list-summary">
        <p>총 {filteredRounds.length}개의 라운드가 있습니다.</p>
      </div>

      {/* 상세보기 모달 */}
      {selectedRound && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>라운드 상세 정보</h3>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="round-info">
                <div className="info-item">
                  <Calendar size={16} />
                  <span>{format(new Date(selectedRound.date), 'yyyy년 MM월 dd일')}</span>
                </div>
                <div className="info-item">
                  <MapPin size={16} />
                  <span>{selectedRound.course}</span>
                </div>
                <div className="info-item">
                  <Users size={16} />
                  <span>{selectedRound.companions.length > 0 ? selectedRound.companions.join(', ') : '혼자'}</span>
                </div>
              </div>

              {/* Front Nine 스코어카드 */}
              <div className="scorecard-section">
                <h4>Front Nine (1-9)</h4>
                <div className="scorecard-table">
                  <div className="scorecard-row header">
                    <div className="cell">HOLE</div>
                    {Array.from({ length: 9 }, (_, i) => (
                      <div key={i} className="cell">{i + 1}</div>
                    ))}
                    <div className="cell total">TOTAL</div>
                  </div>
                  
                  <div className="scorecard-row">
                    <div className="cell">PAR</div>
                    {selectedRound.holes.slice(0, 9).map((hole, i) => (
                      <div key={i} className="cell par">{hole.par}</div>
                    ))}
                    <div className="cell total">{selectedRound.holes.slice(0, 9).reduce((total, hole) => total + hole.par, 0)}</div>
                  </div>
                  
                  <div className="scorecard-row">
                    <div className="cell">SCORE</div>
                    {selectedRound.holes.slice(0, 9).map((hole, i) => (
                      <div key={i} className="cell">
                        <span className={`score-display ${getScoreClass(hole.score)}`}>
                          {hole.par + hole.score}
                        </span>
                      </div>
                    ))}
                    <div className="cell total">{selectedRound.holes.slice(0, 9).reduce((total, hole) => total + hole.par + hole.score, 0)}</div>
                  </div>
                  
                  <div className="scorecard-row">
                    <div className="cell">TO PAR</div>
                    {selectedRound.holes.slice(0, 9).map((hole, i) => (
                      <div key={i} className="cell">
                        <span className={`to-par-display ${getScoreClass(hole.score)}`}>
                          {hole.score > 0 ? `+${hole.score}` : hole.score}
                        </span>
                      </div>
                    ))}
                    <div className="cell total">
                      <span className={`to-par-total ${calculateToParTotal(1, 9, selectedRound.holes) > 0 ? 'over-par' : calculateToParTotal(1, 9, selectedRound.holes) < 0 ? 'under-par' : 'even-par'}`}>
                        {calculateToParTotal(1, 9, selectedRound.holes) > 0 ? `+${calculateToParTotal(1, 9, selectedRound.holes)}` : calculateToParTotal(1, 9, selectedRound.holes)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Nine 스코어카드 */}
              <div className="scorecard-section">
                <h4>Back Nine (10-18)</h4>
                <div className="scorecard-table">
                  <div className="scorecard-row header">
                    <div className="cell">HOLE</div>
                    {Array.from({ length: 9 }, (_, i) => (
                      <div key={i} className="cell">{i + 10}</div>
                    ))}
                    <div className="cell total">TOTAL</div>
                  </div>
                  
                  <div className="scorecard-row">
                    <div className="cell">PAR</div>
                    {selectedRound.holes.slice(9, 18).map((hole, i) => (
                      <div key={i} className="cell par">{hole.par}</div>
                    ))}
                    <div className="cell total">{selectedRound.holes.slice(9, 18).reduce((total, hole) => total + hole.par, 0)}</div>
                  </div>
                  
                  <div className="scorecard-row">
                    <div className="cell">SCORE</div>
                    {selectedRound.holes.slice(9, 18).map((hole, i) => (
                      <div key={i} className="cell">
                        <span className={`score-display ${getScoreClass(hole.score)}`}>
                          {hole.par + hole.score}
                        </span>
                      </div>
                    ))}
                    <div className="cell total">{selectedRound.holes.slice(9, 18).reduce((total, hole) => total + hole.par + hole.score, 0)}</div>
                  </div>
                  
                  <div className="scorecard-row">
                    <div className="cell">TO PAR</div>
                    {selectedRound.holes.slice(9, 18).map((hole, i) => (
                      <div key={i} className="cell">
                        <span className={`to-par-display ${getScoreClass(hole.score)}`}>
                          {hole.score > 0 ? `+${hole.score}` : hole.score}
                        </span>
                      </div>
                    ))}
                    <div className="cell total">
                      <span className={`to-par-total ${calculateToParTotal(10, 18, selectedRound.holes) > 0 ? 'over-par' : calculateToParTotal(10, 18, selectedRound.holes) < 0 ? 'under-par' : 'even-par'}`}>
                        {calculateToParTotal(10, 18, selectedRound.holes) > 0 ? `+${calculateToParTotal(10, 18, selectedRound.holes)}` : calculateToParTotal(10, 18, selectedRound.holes)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 라운드 통계 */}
              <div className="round-summary">
                <h4>라운드 통계</h4>
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-label">총 스코어</div>
                    <div className="stat-value">{selectedRound.totalScore}</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-label">Regular On</div>
                    <div className="stat-value">{selectedRound.regularOnCount}/18</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-label">2 Putt</div>
                    <div className="stat-value">{selectedRound.twoPuttCount}/18</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-label">OB</div>
                    <div className="stat-value">{selectedRound.obCount}</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-label">PA</div>
                    <div className="stat-value">{selectedRound.paCount}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoundList;
