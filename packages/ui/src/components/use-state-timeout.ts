import { useState } from "react";

/**
 * Custom hook that manages state with a timeout.
 *
 * @template T - The type of the state.
 * @param {T | (() => T)} initialState - The initial state or a function that returns the initial state.
 * @param {number} timeout - The timeout duration in milliseconds.
 * @returns {[T, (value: T) => void]} - An array containing the current state and a setter function.
 */
export function useStateTimeout<T>(initialState: T | (() => T)) {
  const [optimisticState, setOptimisticState] = useState<T>(initialState);
  const [state, setState] = useState<T>(initialState);

  /**
   * Setter function that updates the state after the specified timeout.
   *
   * @template D - The type of the value to set, which extends the state type T.
   * @param {D} value - The value to set after the timeout.
   */
  const setter = <D extends T>(value: D, timeout?: number) => {
    setOptimisticState(value);
    if (timeout) {
      setTimeout(() => setState(value), timeout);
    } else {
      setState(value);
    }
  };

  return [state, setter, optimisticState] as const;
}
