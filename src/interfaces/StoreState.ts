import { REDUCERS } from '../constants';
import { BoardCell } from '../gen';

export interface GameState {
  board: Array<Array<BoardCell>> | null;
  selectedRow: number | null;
  selectedColumn: number | null;
  timerTicks: boolean;
  timerResets: boolean;
}

export interface StoreState {
  [REDUCERS.GAME]: GameState;
}
