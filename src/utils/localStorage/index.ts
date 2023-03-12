import { ELocalItem } from "./types";

export const getItem = <T>(key: ELocalItem) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data) as T;
  }
};

export const setItem = <T>(key: ELocalItem, value: T) => {
  const stringifyData = JSON.stringify(value);
  localStorage.setItem(key, stringifyData);
};

export const removeItem = (key: ELocalItem) => {
  localStorage.removeItem(key);
};
