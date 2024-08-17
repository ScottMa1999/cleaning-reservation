import { useContext } from "react";
import { CarServiceContext } from "../context/CarServiceContext";

export default function useCarServiceContext() {
  // context
  const context = useContext(CarServiceContext);
  if (!context) {
    throw new Error("Please use carServiceContext within the carServiceContextProvider")
  }
  return context;
}