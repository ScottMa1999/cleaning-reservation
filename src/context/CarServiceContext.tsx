import { createContext, useState, useCallback } from "react";
import { Dayjs } from "dayjs";

export type CarServiceDataType = {
  CustomerName: string,
  CustomerEmail: string,
  CustomerPhoneNumber: string,
  CarType: "Compact" | "SUV" | "Truck" | "Unselected",
  CarCurrentSituation: number | number[],
  ExpectedCleanDate: Dayjs | null,
  ExpectedCleanLocation: "Building-1" | "Building-2" | "Building-3" | "Unselected",
  EstimatedPrice: string,
  FinalPrice?: string
}

type CarServiceContextType = {
  CarServiceData: CarServiceDataType,
  setCarServiceData: React.Dispatch<React.SetStateAction<CarServiceDataType>>,
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, changeType: "name" | "email" | "phoneNumber") => CarServiceDataType | undefined,
  handleCarTypeSelection: (e: React.MouseEvent<HTMLElement>, selection: "Compact" | "SUV" | "Truck") => void,
  handleCarLocationSelection: (e: React.MouseEvent<HTMLElement>, selection: "Building-1" | "Building-2" | "Building-3") => void
}

const initialCarServiceDataType: CarServiceDataType = {
  CustomerName: '',
  CustomerEmail: '',
  CustomerPhoneNumber: '',
  CarType: 'Unselected',
  CarCurrentSituation: 0,
  ExpectedCleanDate: null,
  ExpectedCleanLocation: 'Unselected',
  EstimatedPrice: '',
}

export const CarServiceContext = createContext<CarServiceContextType | null>(null);

export function CarServiceContextProvider({children}: {children:React.ReactNode}) {
  // states
  const [data, setData] = useState<CarServiceDataType>(initialCarServiceDataType);

  // function expressions
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, changeType: "name" | "email" | "phoneNumber") => {
    switch(changeType) {
      case "name":
        setData({
          ...data,
          CustomerName: e.target.value
        });
        break;
      case "email":
        setData({
          ...data,
          CustomerEmail: e.target.value
        });
        break;
      case "phoneNumber":
        setData({
          ...data,
          CustomerPhoneNumber: e.target.value
        });
        break;
      default:
        return data;
    }
  };

  const handleCarTypeSelection = (e: React.MouseEvent<HTMLElement>, selection: "Compact" | "SUV" | "Truck") => {
    setData({
      ...data,
      CarType: selection
    });
  }

  const handleCarLocationSelection = (e: React.MouseEvent<HTMLElement>, selection: "Building-1" | "Building-2" | "Building-3") => {
    setData({
      ...data,
      ExpectedCleanLocation: selection
    });
  }

  return (
    <CarServiceContext.Provider value={{CarServiceData: data, setCarServiceData: setData, handleChange, handleCarTypeSelection, handleCarLocationSelection}}>
      {children}
    </CarServiceContext.Provider>
  )
}