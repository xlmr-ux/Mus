import { useRef } from "react";

export function useStateRef(value) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}
