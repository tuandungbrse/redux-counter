import { INCREMENT, DECREMENT, RESET } from "../actions/constants";

export const countReducer = (state = 5, action) => {
  const { type } = action;

  if (type == INCREMENT) return state + 1;
  if (type == DECREMENT) return state - 1;
  if (type == RESET) return 0;

  return state;
};
