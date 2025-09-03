import React, { useState } from 'react';
import { GolfRound, Hole, ClubUsage } from '../types/golf';
import { format } from 'date-fns';
import { MapPin, Plus, Trash2, Save } from 'lucide-react';
import './RoundForm.css';

interface RoundFormProps {
  onAddRound: (round: GolfRound) => void;
}

const RoundForm: React.FC<RoundFormProps> = ({ onAddRound }) => {
  const [course, setCourse] = useState('');
  const [companions, setCompanions] = useState<string[]>(['']);
  const [holes, setHoles] = useState<Hole[]>(Array.from({ length: 18 }, (_, i) => ({
    holeNumber: i + 1,
    par: 4, // 기본값을 4로 설정
    score: 0,
    regularOn: false,
    twoPutt: false,
    obCount: 0,
    hazardCount: 0,
    drive: { club: 'Driver', distance: 0, result: 'fair', driverResult: '' },
    wood: { club: 'Wood', distance: 0, result: 'fair', woodResult: '' },
    irons: [{ club: 'Iron', distance: 0, result: 'fair', ironNumber: undefined }],
    putt: { club: 'Putter', distance: 0, result: 'fair', puttCount: 0 }
  })));

  const addCompanion = () => {
    setCompanions([...companions, '']);
  };

  const removeCompanion = (index: number) => {
    if (companions.length > 1) {
      setCompanions(companions.filter((_, i) => i !== index));
    }
  };

  const updateCompanion = (index: number, value: string) => {
    const newCompanions = [...companions];
    newCompanions[index] = value;
    setCompanions(newCompanions);
  };

  const updatePar = (holeIndex: number, par: number) => {
    const newHoles = [...holes];
    newHoles[holeIndex] = { ...newHoles[holeIndex], par: par };
    setHoles(newHoles);
    
    // 파가 변경되면 스코어 재계산
    recalculateHoleScore(holeIndex);
  };

  const addIron = (holeIndex: number) => {
    const newHoles = [...holes];
    const newIron: ClubUsage = { club: 'Iron', distance: 0, result: 'fair', ironNumber: 7 };
    newHoles[holeIndex].irons.push(newIron);
    setHoles(newHoles);
    
    // 스코어 재계산
    recalculateHoleScore(holeIndex);
  };

  const removeIron = (holeIndex: number, ironIndex: number) => {
    const newHoles = [...holes];
    newHoles[holeIndex].irons.splice(ironIndex, 1);
    
    // 최소 1개는 유지
    if (newHoles[holeIndex].irons.length === 0) {
      newHoles[holeIndex].irons = [{ club: 'Iron', distance: 0, result: 'fair', ironNumber: 7 }];
    }
    
    setHoles(newHoles);
    
    // 스코어 재계산
    recalculateHoleScore(holeIndex);
  };

  const updateClubUsage = (holeIndex: number, clubType: 'drive' | 'wood' | 'irons' | 'putt', field: keyof ClubUsage, value: any, ironIndex?: number) => {
    const newHoles = [...holes];
    
    if (clubType === 'irons' && ironIndex !== undefined) {
      // 아이언 배열의 특정 인덱스 업데이트
      const newIrons = [...newHoles[holeIndex].irons];
      newIrons[ironIndex] = { ...newIrons[ironIndex], [field]: value };
      newHoles[holeIndex] = {
        ...newHoles[holeIndex],
        irons: newIrons
      };
    } else {
      // 다른 클럽 타입 업데이트
      newHoles[holeIndex] = {
        ...newHoles[holeIndex],
        [clubType]: { ...newHoles[holeIndex][clubType], [field]: value }
      };
    }
    
    setHoles(newHoles);
    
    // 스코어 자동 계산
    recalculateHoleScore(holeIndex);
  };

  const recalculateHoleScore = (holeIndex: number) => {
    setHoles(prevHoles => {
      const newHoles = [...prevHoles];
      const hole = newHoles[holeIndex];
      let score = 0;
      
      // Driver 스코어 계산 (선택된 경우에만)
      if (hole.drive.driverResult) {
        switch (hole.drive.driverResult) {
          case 'survival':
            score += 1;
            break;
          case 'ob':
            score += 3;
            break;
          case 'pa':
            score += 2;
            break;
        }
      }
      
      // 우드/유틸 스코어 계산 (선택된 경우에만 1점)
      if (hole.wood.woodResult) {
        score += 1;
      }
      
      // 아이언 스코어 계산 (선택된 아이언만 1점씩)
      const selectedIrons = hole.irons.filter(iron => iron.ironNumber !== undefined);
      score += selectedIrons.length;
      
      // 퍼터 스코어 계산 (사용자 입력값)
      score += hole.putt.puttCount || 0;
      
      // Regular On 자동 계산 (Driver + 우드/유틸 + 아이언)
      const driveScore = hole.drive.driverResult ? (hole.drive.driverResult === 'survival' ? 1 : hole.drive.driverResult === 'pa' ? 2 : 3) : 0;
      const woodScore = hole.wood.woodResult ? 1 : 0; // 우드/유틸 사용 시 1점
      const ironScore = selectedIrons.length; // 선택된 아이언 개수
      const approachScore = driveScore + woodScore + ironScore;
      let regularOn = false;
      
      if (hole.par === 3) {
        regularOn = approachScore <= 1;
      } else if (hole.par === 4) {
        regularOn = approachScore <= 2;
      } else if (hole.par === 5) {
        regularOn = approachScore <= 3;
      }
      
      // 2 Putt 자동 계산 (퍼터가 2번 이하일 경우)
      const twoPutt = (hole.putt.puttCount || 0) <= 2;
      
      newHoles[holeIndex] = {
        ...hole,
        score: score - hole.par, // 파 기준으로 상대 스코어 계산
        regularOn: regularOn,
        twoPutt: twoPutt
      };
      
      return newHoles;
    });
  };

  const updateScore = (holeIndex: number, score: number) => {
    const newHoles = [...holes];
    const hole = newHoles[holeIndex];
    
    // 스코어를 파 기준으로 계산 (예: 파 4에서 6타면 +2)
    const scoreRelativeToPar = score - hole.par;
    
    newHoles[holeIndex] = {
      ...hole,
      score: scoreRelativeToPar
    };
    setHoles(newHoles);
  };



  const incrementPutt = (holeIndex: number) => {
    setHoles(prevHoles => {
      const currentPuttCount = prevHoles[holeIndex].putt.puttCount || 0;
      const newPuttCount = Math.min(6, currentPuttCount + 1);
      
      const newHoles = [...prevHoles];
      newHoles[holeIndex] = {
        ...newHoles[holeIndex],
        putt: { ...newHoles[holeIndex].putt, puttCount: newPuttCount }
      };
      return newHoles;
    });
    
    // 스코어 재계산
    setTimeout(() => recalculateHoleScore(holeIndex), 0);
  };

  const decrementPutt = (holeIndex: number) => {
    setHoles(prevHoles => {
      const currentPuttCount = prevHoles[holeIndex].putt.puttCount || 0;
      const newPuttCount = Math.max(0, currentPuttCount - 1);
      
      const newHoles = [...prevHoles];
      newHoles[holeIndex] = {
        ...newHoles[holeIndex],
        putt: { ...newHoles[holeIndex].putt, puttCount: newPuttCount }
      };
      return newHoles;
    });
    
    // 스코어 재계산
    setTimeout(() => recalculateHoleScore(holeIndex), 0);
  };

  const getScoreDisplay = (score: number) => {
    if (score === 0) return '0';
    if (score > 0) return `+${score}`;
    return score.toString();
  };

  const getScoreClass = (score: number) => {
    if (score === 0) return 'score-par';
    if (score === 1) return 'score-bogey';
    if (score >= 2) return 'score-double';
    return 'score-birdie';
  };

  const calculateTotal = (startHole: number, endHole: number, field: 'par' | 'score' | 'putt') => {
    return holes
      .filter(hole => hole.holeNumber >= startHole && hole.holeNumber <= endHole)
      .reduce((total, hole) => {
        if (field === 'par') return total + hole.par;
        if (field === 'score') return total + hole.par + hole.score;
        if (field === 'putt') return total + (hole.putt.puttCount || 0);
        return total;
      }, 0);
  };

  const calculateToParTotal = (startHole: number, endHole: number) => {
    return holes
      .filter(hole => hole.holeNumber >= startHole && hole.holeNumber <= endHole)
      .reduce((total, hole) => total + hole.score, 0);
  };

  const calculateOBPAStats = () => {
    const obCount = holes.filter(hole => hole.drive.driverResult === 'ob').length;
    const paCount = holes.filter(hole => hole.drive.driverResult === 'pa').length;
    return { obCount, paCount };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { obCount, paCount } = calculateOBPAStats();
    
    const newRound: GolfRound = {
      id: Date.now().toString(),
      date: format(new Date(), 'yyyy-MM-dd'),
      course: course || '미지정 코스',
      totalScore: calculateTotal(1, 18, 'score'),
      regularOnCount: holes.filter(hole => hole.regularOn).length,
      twoPuttCount: holes.filter(hole => hole.twoPutt).length,
      obCount,
      paCount,
      companions: companions.filter(c => c.trim()),
      holes: holes
    };

    onAddRound(newRound);
  };

  return (
    <div className="round-form">
      <div className="form-header">
        <h2>🏌️ 새 라운드 기록</h2>
        <p>골프 라운드 스코어를 입력하세요</p>
      </div>

      <form onSubmit={handleSubmit} className="scorecard-form">
        {/* 코스 정보 섹션 */}
        <div className="course-info">
          <div className="input-group">
            <MapPin className="input-icon" />
            <input
              type="text"
              placeholder="골프장 이름"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="course-input"
            />
          </div>
          
          <div className="companions-section">
            <label>동반자:</label>
            <div className="companions-list">
              {companions.map((companion, index) => (
                <div key={index} className="companion-input">
                  <input
                    type="text"
                    placeholder="동반자 이름"
                    value={companion}
                    onChange={(e) => updateCompanion(index, e.target.value)}
                  />
                  {companions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeCompanion(index)}
                      className="remove-btn"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addCompanion}
                className="add-companion-btn"
              >
                <Plus size={16} /> 동반자 추가
              </button>
            </div>
          </div>
        </div>

        {/* 스코어카드 */}
        <div className="scorecard-container">
          <h3>스코어카드</h3>
          
          {/* Front Nine */}
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
                {holes.slice(0, 9).map((hole, i) => (
                  <div key={i} className="cell par">{hole.par}</div>
                ))}
                <div className="cell total">{calculateTotal(1, 9, 'par')}</div>
              </div>
              
              <div className="scorecard-row">
                <div className="cell">SCORE</div>
                {holes.slice(0, 9).map((hole, i) => (
                  <div key={i} className="cell">
                    <input
                      type="number"
                      min={hole.par - 2}
                      max={hole.par + 5}
                      value={hole.par + hole.score}
                      onChange={(e) => updateScore(i, parseInt(e.target.value) || 0)}
                      className={`score-input ${getScoreClass(hole.score)}`}
                    />
                  </div>
                ))}
                <div className="cell total">{calculateTotal(1, 9, 'score')}</div>
              </div>
              
              <div className="scorecard-row">
                <div className="cell">TO PAR</div>
                {holes.slice(0, 9).map((hole, i) => (
                  <div key={i} className="cell">
                    <span className={`to-par-display ${getScoreClass(hole.score)}`}>
                      {hole.score > 0 ? `+${hole.score}` : hole.score}
                    </span>
                  </div>
                ))}
                <div className="cell total">
                  <span className={`to-par-total ${calculateToParTotal(1, 9) > 0 ? 'over-par' : calculateToParTotal(1, 9) < 0 ? 'under-par' : 'even-par'}`}>
                    {calculateToParTotal(1, 9) > 0 ? `+${calculateToParTotal(1, 9)}` : calculateToParTotal(1, 9)}
                  </span>
                </div>
              </div>
              

            </div>
          </div>

          {/* Back Nine */}
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
                {holes.slice(9, 18).map((hole, i) => (
                  <div key={i} className="cell par">{hole.par}</div>
                ))}
                <div className="cell total">{calculateTotal(10, 18, 'par')}</div>
              </div>
              
              <div className="scorecard-row">
                <div className="cell">SCORE</div>
                {holes.slice(9, 18).map((hole, i) => (
                  <div key={i} className="cell">
                    <input
                      type="number"
                      min={hole.par - 2}
                      max={hole.par + 5}
                      value={hole.par + hole.score}
                      onChange={(e) => updateScore(i + 9, parseInt(e.target.value) || 0)}
                      className={`score-input ${getScoreClass(hole.score)}`}
                    />
                  </div>
                ))}
                <div className="cell total">{calculateTotal(10, 18, 'score')}</div>
              </div>
              
              <div className="scorecard-row">
                <div className="cell">TO PAR</div>
                {holes.slice(9, 18).map((hole, i) => (
                  <div key={i} className="cell">
                    <span className={`to-par-display ${getScoreClass(hole.score)}`}>
                      {hole.score > 0 ? `+${hole.score}` : hole.score}
                    </span>
                  </div>
                ))}
                <div className="cell total">
                  <span className={`to-par-total ${calculateToParTotal(10, 18) > 0 ? 'over-par' : calculateToParTotal(10, 18) < 0 ? 'under-par' : 'even-par'}`}>
                    {calculateToParTotal(10, 18) > 0 ? `+${calculateToParTotal(10, 18)}` : calculateToParTotal(10, 18)}
                  </span>
                </div>
              </div>
              

            </div>
          </div>

          {/* 전체 합계 */}
          <div className="total-summary">
            <div className="total-item">
              <span className="total-label">전체 PAR:</span>
              <span className="total-value">{calculateTotal(1, 18, 'par')}</span>
            </div>
            <div className="total-item">
              <span className="total-label">전체 SCORE:</span>
              <span className="total-value">{calculateTotal(1, 18, 'score')}</span>
            </div>

          </div>
        </div>

        {/* 상세 클럽 사용 기록 */}
        <div className="club-usage-container">
          <h3>상세 클럽 사용 기록</h3>
          
          {holes.map((hole, holeIndex) => (
            <div key={hole.holeNumber} className="hole-detail-card">
              <div className="hole-header">
                <div className="hole-info">
                  <div className="hole-title-row">
                    <h4>홀 {hole.holeNumber}</h4>
                    <div className="hole-score-info">
                      <span className="par-info">파 {hole.par}</span>
                      <span className="score-separator">→</span>
                      <span className={`hole-score ${getScoreClass(hole.score)}`}>
                        {hole.par + hole.score}타
                      </span>
                      <span className={`score-status ${getScoreClass(hole.score)}`}>
                        ({getScoreDisplay(hole.score)})
                      </span>
                    </div>
                  </div>
                  <div className="par-selector">
                    <label>파:</label>
                    <select
                      value={hole.par}
                      onChange={(e) => updatePar(holeIndex, parseInt(e.target.value))}
                      className="par-select"
                    >
                      <option value={3}>파 3</option>
                      <option value={4}>파 4</option>
                      <option value={5}>파 5</option>
                    </select>
                  </div>
                </div>
                <div className="hole-kpis">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={hole.regularOn}
                      disabled
                      className="kpi-checkbox"
                    />
                    Regular On
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={hole.twoPutt}
                      disabled
                      className="kpi-checkbox"
                    />
                    2 Putt
                  </label>
                </div>
              </div>

              <div className="club-usage">
                <div className="club-group">
                  <label>드라이버</label>
                  <div className="driver-options">
                    <select
                      value={hole.drive.driverResult}
                      onChange={(e) => updateClubUsage(holeIndex, 'drive', 'driverResult', e.target.value as 'survival' | 'ob' | 'pa' | '')}
                      className="driver-result-select"
                    >
                      <option value="">드라이버</option>
                      <option value="survival">굿샷</option>
                      <option value="pa">PA</option>
                      <option value="ob">OB</option>
                    </select>
                  </div>
                </div>

                <div className="club-group">
                  <label>우드/유틸</label>
                  <div className="wood-options">
                    <select
                      value={hole.wood.woodResult}
                      onChange={(e) => updateClubUsage(holeIndex, 'wood', 'woodResult', e.target.value as 'survival' | 'ob' | 'pa' | '')}
                      className="wood-result-select"
                    >
                      <option value="">우드/유틸</option>
                      <option value="survival">유틸2</option>
                    </select>
                  </div>
                </div>

                <div className="club-group">
                  <label>아이언</label>
                  <div className="irons-container">
                    {hole.irons.map((iron, ironIndex) => (
                      <div key={ironIndex} className="iron-item">
                        <select
                          value={iron.ironNumber || ''}
                          onChange={(e) => updateClubUsage(holeIndex, 'irons', 'ironNumber', e.target.value ? parseInt(e.target.value) : undefined, ironIndex)}
                          className="iron-number-select"
                        >
                          <option value="">아이언</option>
                          <option value={3}>3번 아이언</option>
                          <option value={4}>4번 아이언</option>
                          <option value={5}>5번 아이언</option>
                          <option value={6}>6번 아이언</option>
                          <option value={7}>7번 아이언</option>
                          <option value={8}>8번 아이언</option>
                          <option value={9}>9번 아이언</option>
                          <option value={10}>P</option>
                          <option value={52}>52</option>
                          <option value={56}>56</option>
                        </select>
                        {hole.irons.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeIron(holeIndex, ironIndex)}
                            className="remove-iron-btn"
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addIron(holeIndex)}
                      className="add-iron-btn"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="club-group">
                  <label>퍼터</label>
                  <div className="putt-container">
                    <span className="putt-score">{hole.putt.puttCount || 0}</span>
                    <div className="putt-buttons">
                      <button
                        type="button"
                        onClick={() => decrementPutt(holeIndex)}
                        className="putt-btn putt-minus"
                        disabled={(hole.putt.puttCount || 0) <= 0}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => incrementPutt(holeIndex)}
                        className="putt-btn putt-plus"
                        disabled={(hole.putt.puttCount || 0) >= 6}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            <Save size={20} />
            라운드 저장
          </button>
        </div>
      </form>
    </div>
  );
};

export default RoundForm;
