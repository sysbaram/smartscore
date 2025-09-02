export interface GolfRound {
  id: string;
  date: string;
  course: string;
  totalScore: number;
  regularOnCount: number;
  twoPuttCount: number;
  obCount: number;
  paCount: number;
  companions: string[];
  holes: Hole[];
}

export interface Hole {
  holeNumber: number;
  par: number;
  score: number;
  regularOn: boolean;
  twoPutt: boolean;
  obCount: number; // OB 횟수
  hazardCount: number; // 해저드 횟수
  drive: ClubUsage;
  wood: ClubUsage; // 우드/유틸 추가
  irons: ClubUsage[]; // 여러 아이언을 배열로 변경
  putt: ClubUsage;
}

export interface ClubUsage {
  club: string;
  distance: number;
  result: 'good' | 'fair' | 'poor';
  ironNumber?: number; // 아이언 번호 (3번~9번, PW, GW, SW, LW)
  driverResult?: 'survival' | 'ob' | 'pa' | ''; // Driver 결과 (생존, OB, PA, 미사용)
  woodResult?: 'survival' | 'ob' | 'pa' | ''; // 우드/유틸 결과 (생존, OB, PA, 미사용)
  puttCount?: number; // 퍼터 횟수 (0~4)
  notes?: string;
}

export interface GolfStats {
  totalRounds: number;
  averageScore: number;
  regularOnPercentage: number;
  twoPuttPercentage: number;
  bestScore: number;
  worstScore: number;
  totalOB: number;
  totalHazards: number;
  mostUsedClubs: { club: string; count: number }[];
}
