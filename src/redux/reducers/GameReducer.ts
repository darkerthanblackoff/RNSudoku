import { GameState } from '../../interfaces';
import { ACTIONS } from '../../constants';
import { Board } from '../../gen';

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
      const board = new Board(state.board!);
      const cell = board.getCell(state.selectedRow!, state.selectedColumn!);

      if (cell.isVisible()) {
        return { ...state };
      }

      let { errorsCount } = state;
      let errors = errorsCount;
      let cells = state.cellsToResolve;

      const prevCorrectnes = cell.isCorrect();
      if (cell.getImValue() === null) {
        cells -= 1;
      }
      cell.setImValue(action.payload);
      const nextCorrectnes = cell.isCorrect();

      if (prevCorrectnes && !nextCorrectnes) {
        errors += 1;
        cells += 1;
      } else if (!prevCorrectnes && nextCorrectnes) {
        errors -= 1;
        cells -= 1;
      }

      return {
        ...state,
        board: board.toArray(),
        errorsCount: errors,
        cellsToResolve: cells,
      };
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
    default:
      return state;
  }
};

export default GameReducer;
