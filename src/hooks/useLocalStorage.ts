import { useState } from "react";
import { readLocalStorage } from "../core/utils/readLocalStorage";
import { writeLocalStorage } from "../core/utils/writeLocalStorage";
import { Value } from "../types/Value";

export const useLocalStorage = <T>(key: string, initialValue: T): Value<T> => {
  const [value, setValue] = useState<T>(readLocalStorage(key) ?? initialValue);

  const updateValue = (newValue: T | ((previous: T) => T)) => {
    setValue((previous) => {
      if (typeof newValue === "function") {
        previous = (newValue as (previous: T) => T)(previous);
        writeLocalStorage(key, previous);
        return previous;
      } else {
        writeLocalStorage(key, newValue);
        return newValue;
      }
    });
  };

  return [value, updateValue];
};
