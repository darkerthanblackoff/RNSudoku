export interface LeaderRecord {
  name: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  errorsCount: number;
  spentTime: string;
  fineTime: string;
  totalTime: string;
  date: number;
}
