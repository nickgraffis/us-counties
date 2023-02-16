import { statesdata } from '.';
import { State, StateAbv } from './types';

export const normalizeState = (state: State | StateAbv) => {
  if (state.length === 2) {
    return state.toUpperCase() as StateAbv;
  }

  return (statesdata.find(
    ([name]) => name === state
  )?.[1] || state) as StateAbv;
};
