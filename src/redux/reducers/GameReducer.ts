import { GameState } from '../../interfaces';
import { ACTIONS } from '../../constants';
import { StupidSudokuGenerator, Board } from '../../gen';

const INITIAL_STATE: GameState = {
  board: null,
  selectedRow: null,
  selectedColumn: null,
  timerTicks: false,
  timerValue: 0,
  timerResets: false,
  currentDifficulty: 'EASY',
  errorsCount: 0,
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
        currentDifficulty: action.payload,
        board: new StupidSudokuGenerator()
          .generate(action.payload)
          .getBoard()
          .toArray(),
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
      const prevCorrectnes = cell.isCorrect();
      cell.setImValue(action.payload);
      const nextCorrectnes = cell.isCorrect();

      let { errorsCount } = state;
      let errors = errorsCount;
      if (prevCorrectnes) {
        errors = nextCorrectnes ? errors : errors + 1;
      } else {
        errors = nextCorrectnes ? errors - 1 : errors;
      }

      return {
        ...state,
        board: board.toArray(),
        errorsCount: errors,
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
      return {
        ...state,
        timerValue: action.payload,
      };
    case ACTIONS.GAME.ADD_ERROR:
      return { ...state, errorsCount: state.errorsCount + 1 };
    default:
      return state;
  }
};

export default GameReducer;
