export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export const incrementActionCreator = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementActionCreator = () => {
  return {
    type: DECREMENT,
  };
};

export const resetActionCreator = () => {
  return {
    type: RESET,
  };
};
