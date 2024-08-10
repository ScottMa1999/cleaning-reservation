import { useContext } from "react";
import { ToggleDrawerContext } from "../context/ToggleDrawerContext";

export default function useToggleDrawerContext() {
  // states
  const context = useContext(ToggleDrawerContext);

  if (!context) {
    throw new Error("ToggleDrawerContext need to be used within the ToggleDrawerContextProvider");
  }

  return context;
}