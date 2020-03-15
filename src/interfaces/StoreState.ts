import { REDUCERS } from '../constants';
import { BoardCell } from '../gen';
import { LeaderRecord } from './LeaderRecord';

export interface GameState {
  board: Array<Array<BoardCell>> | null;
  selectedRow: number | null;
  selectedColumn: number | null;
  timerTicks: boolean;
  timerValue: number;
  timerFine: number;
  timerResets: boolean;
  currentDifficulty: 'EASY' | 'MEDIUM' | 'HARD';
  errorsCount: number;
  cellsToResolve: number;
  currentGamePlayer: string;
  isGameFinished: boolean;
  undoQueue: Array<{ i: number; j: number; prevValue: number | null }>;
}

export interface SettingsState {
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  name: string;
}

export interface LeaderboardState {
  leaders: Array<LeaderRecord>;
}

export interface StoreState {
  [REDUCERS.GAME]: GameState;
  [REDUCERS.SETTINGS]: SettingsState;
  [REDUCERS.LEADER_BOARD]: LeaderboardState;
}
