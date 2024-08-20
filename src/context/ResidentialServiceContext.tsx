import { createContext, useState } from "react";
import { Dayjs } from 'dayjs';

type ResidentialServiceContextType = {
  ResidentialServiceData: ResidentialServiceDataType,
  setResidentialServiceData: React.Dispatch<React.SetStateAction<ResidentialServiceDataType>>,
  handleResidentialTypeSelection: (e: React.MouseEvent<HTMLElement>, selection: "Apartment" | "House" | "Business") => void,
  handleResidentialApartmentTypeSelection: (e: React.MouseEvent<HTMLElement>, selection: "Studio" | "One Bedroom" | "Two Bedrooms" | "Three Bedrooms") => void,
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, changeType: "name" | "email" | "phoneNumber") => ResidentialServiceDataType | undefined
}

type ResidentialServiceDataType = {
  steps: {
    label: string
  }[],
  residentialType: "Apartment" | "House" | "Business" | undefined,
  apartmentType?: "Studio" | "One Bedroom" | "Two Bedrooms" | "Three Bedrooms" | undefined,
  name: string | undefined,
  email: string | undefined,
  phoneNumber: string | undefined,
  ExpectedCleanDate: Dayjs | null,
}

const initialResidentialServiceData: ResidentialServiceDataType = {
  steps: [
    {
      label: 'Please Select residential cleaning types',
    },
    {
      label: 'Please Enter Contact Information',
    },
    {
      label: 'Please Select expected cleaning date',
    },
  ],
  residentialType: undefined,
  apartmentType: undefined,
  name: undefined,
  email: undefined,
  phoneNumber: undefined,
  ExpectedCleanDate: null
}

export const ResidentialServiceContext = createContext<ResidentialServiceContextType | null>(null);

export function ResidentialServiceContextProvider({children}:{children: React.ReactNode}) {
  // states
  const [ResidentialServiceData, setResidentialServiceData] = useState<ResidentialServiceDataType>(initialResidentialServiceData);

  // function expression
  const handleResidentialTypeSelection = (e: React.MouseEvent<HTMLElement>, selection: "Apartment" | "House" | "Business") => {
    setResidentialServiceData({
      ...ResidentialServiceData,
      residentialType: selection
    })
  }

  const handleResidentialApartmentTypeSelection =  (e: React.MouseEvent<HTMLElement>, selection: "Studio" | "One Bedroom" | "Two Bedrooms" | "Three Bedrooms") => {
    setResidentialServiceData({
      ...ResidentialServiceData,
      apartmentType: selection
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, changeType: "name" | "email" | "phoneNumber") => {
    switch(changeType) {
      case "name":
        setResidentialServiceData({
          ...ResidentialServiceData,
          name: e.target.value
        });
        break;
      case "email":
        setResidentialServiceData({
          ...ResidentialServiceData,
          email: e.target.value
        });
        break;
      case "phoneNumber":
        setResidentialServiceData({
          ...ResidentialServiceData,
          phoneNumber: e.target.value
        });
        break;
      default:
        return ResidentialServiceData;
    }
  };

  return (
    <ResidentialServiceContext.Provider value={{ResidentialServiceData, setResidentialServiceData, handleResidentialTypeSelection, handleResidentialApartmentTypeSelection, handleChange}}>
      {children}
    </ResidentialServiceContext.Provider>
  )
}