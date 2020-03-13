import { GameState } from '../../interfaces';
import { ACTIONS } from '../../constants';
import { StupidSudokuGenerator, Board } from '../../gen';

const INITIAL_STATE: GameState = {
  board: null,
  selectedRow: null,
  selectedColumn: null,
  timerTicks: false,
  timerResets: false,
};

const GameReducer = (
  state: GameState = INITIAL_STATE,
  action: { type: string; payload: any },
): GameState => {
  switch (action.type) {
    case ACTIONS.GAME.INIT:
      return {
        ...state,
        board: new StupidSudokuGenerator().generate('EASY').board.getBoard(),
      };
    case ACTIONS.GAME.SELECT_CELL:
      return {
        ...state,
        selectedRow: action.payload.i,
        selectedColumn: action.payload.j,
      };
    case ACTIONS.GAME.UPDATE_BOARD:
      return {
        ...state,
        board: new StupidSudokuGenerator().generate('EASY').board.getBoard(),
      };
    case ACTIONS.GAME.PLACE_IM_VAL:
      const b = new Board(state.board!);

      b.getCell(state.selectedRow!, state.selectedColumn!).setImValue(
        action.payload,
      );

      return {
        ...state,
        board: b.getBoard(),
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
    default:
      return state;
  }
};

export default GameReducer;
