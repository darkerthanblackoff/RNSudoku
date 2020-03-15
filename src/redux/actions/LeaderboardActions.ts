import { ACTIONS } from '../../constants';
import { LeaderRecord } from '../../interfaces/LeaderRecord';

export const addLeaderboardRecord = (
  leaders: Array<LeaderRecord>,
  record: LeaderRecord,
) => {
  leaders.push(record);

  return {
    type: ACTIONS.LEADER_BOARD.ADD_RECORD,
    payload: leaders,
  };
};

export const removeLeaderboardRecord = () => {
  return {
    type: ACTIONS.LEADER_BOARD.REMOVE_RECORD,
  };
};
