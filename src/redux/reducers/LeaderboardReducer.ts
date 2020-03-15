import { LeaderboardState } from '../../interfaces';
import { ACTIONS } from '../../constants';

const INITIAL_STATE: LeaderboardState = {
  leaders: [],
};

const LeaderboardReducer = (
  state: LeaderboardState = INITIAL_STATE,
  action: { type: string; payload: any },
): LeaderboardState => {
  switch (action.type) {
    case ACTIONS.LEADER_BOARD.ADD_RECORD:
      return { ...state };
    case ACTIONS.LEADER_BOARD.REMOVE_RECORD:
      return { ...state };
    default:
      return state;
  }
};

export default LeaderboardReducer;
