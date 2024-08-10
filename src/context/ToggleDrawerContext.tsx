import { createContext, useState } from "react";

// types
type ToggleDrawerContextTypes = {
  drawerStatus: boolean;
  toggleDrawerStatus: () => void;
}

export const ToggleDrawerContext = createContext<ToggleDrawerContextTypes | null>(null);

export const ToggleDrawerContextProvider = ({children}: {children: React.ReactNode}) => {
  // states
  const [drawerStatus, setDrawerStatus] = useState<boolean>(false);

  // function expression
  const toggleDrawerStatus = () => setDrawerStatus(pre => !pre);

  return (
    <ToggleDrawerContext.Provider value={{drawerStatus, toggleDrawerStatus}}>
      {children}
    </ToggleDrawerContext.Provider>
  )
}