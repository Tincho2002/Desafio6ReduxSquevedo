import { counterTypes } from "../types";

const { INCREMENT, DECREMENT, RESET } = counterTypes;

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});
