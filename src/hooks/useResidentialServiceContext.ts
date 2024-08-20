import { useContext } from "react";
import { ResidentialServiceContext } from "../context/ResidentialServiceContext";

export default function useResidentialServiceContext() {
  let context = useContext(ResidentialServiceContext);
  if (!context) {
    throw new Error("Please use ResidentialServiceContext within the ResidentialServiceContextProvider")
  }
  return context;
}