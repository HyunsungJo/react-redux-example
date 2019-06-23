import { ADD_ITEM } from "./action-types";

export function addItem(payload) {
  return { type: ADD_ITEM, payload }
};
