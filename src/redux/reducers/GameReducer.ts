import { GameState } from '../../interfaces';
import { ACTIONS } from '../../constants';
import { Board, BoardCell } from '../../gen';

const INITIAL_STATE: GameState = {
  board: null,
  selectedRow: null,
  selectedColumn: null,
  timerTicks: false,
  timerValue: 0,
  timerResets: false,
  currentDifficulty: 'EASY',
  errorsCount: 0,
  cellsToResolve: 0,
  currentGamePlayer: '',
  isGameFinished: false,
  undoQueue: [],
};

const GameReducer = (
  state: GameState = INITIAL_STATE,
  action: { type: string; payload: any },
): GameState => {
  switch (action.type) {
    case ACTIONS.GAME.NEW:
      return {
        ...state,
        timerValue: 0,
        ...action.payload,
      };
    case ACTIONS.GAME.SELECT_CELL:
      return {
        ...state,
        selectedRow: action.payload.i,
        selectedColumn: action.payload.j,
      };
    case ACTIONS.GAME.PLACE_IM_VAL:
      const board = action.payload.board;
      const undoItem = action.payload.undoItem;

      // if (prevCell.isVisible()) {
      //   return { ...state };
      // }

      if (state.undoQueue.length === 5) {
        state.undoQueue.shift();
      }

      state.undoQueue.push(undoItem);

      return {
        ...state,
        board,
      };
    case ACTIONS.GAME.UNDO_IM_VAL:
      return { ...state };
    case ACTIONS.GAME.TIMER_START:
      return {
        ...state,
        timerTicks: true,
      };
    case ACTIONS.GAME.TIMER_STOP:
      return {
        ...state,
        timerTicks: false,
      };
    case ACTIONS.GAME.TIMER_RESET:
      return {
        ...state,
        timerResets: true,
      };
    case ACTIONS.GAME.TIMER_GET_MSECS:
      const isGameFinished =
        state.cellsToResolve === 0 && state.errorsCount === 0;
      return {
        ...state,
        timerValue: action.payload,
        timerTicks: !isGameFinished,
        isGameFinished,
      };
    case ACTIONS.GAME.ADD_ERROR:
      return { ...state, errorsCount: state.errorsCount + 1 };
    case ACTIONS.GAME.SUB_ERROR:
      return { ...state, errorsCount: state.errorsCount - 1 };
    case ACTIONS.GAME.ADD_CELLS_TO_RESOLVE:
      return { ...state, cellsToResolve: state.cellsToResolve + 1 };
    case ACTIONS.GAME.SUB_CELLS_TO_RESOLVE:
      return { ...state, cellsToResolve: state.cellsToResolve - 1 };
    default:
      return state;
  }
};

export default GameReducer;
