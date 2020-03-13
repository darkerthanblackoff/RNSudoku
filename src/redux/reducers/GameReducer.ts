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
      const b = new Board(state.board!);

      b.getCell(state.selectedRow!, state.selectedColumn!).setImValue(
        action.payload,
      );

      return {
        ...state,
        board: b.toArray(),
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
    default:
      return state;
  }
};

export default GameReducer;
