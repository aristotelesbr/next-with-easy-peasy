import { createStore } from "easy-peasy";
import { counter } from "./models/counter";
import { people } from "./models/pessoa";

export const model = {
  counter,
  people
};

export function initializeStore(initialState) {
  return createStore(model, initialState);
}
