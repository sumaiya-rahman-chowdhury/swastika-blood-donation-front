"use client"

import { apiUrl } from "@/static/variables";
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

interface BloodType {
    _id: string;
    type: string;
  }
  
  interface District {
    _id: string;
    name: string;
  }
  
  interface OptionContextType {
    bloodTypes: BloodType[];
    districts: District[];

  }
  
export const OptionContext = createContext<OptionContextType | undefined>(undefined)

  export function OptionsProvider({ children }: { children: ReactNode }) {
    const [bloodTypes, setBloodTypes] = useState<BloodType[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);

    useEffect(() => {
        fetch(`${apiUrl}/blood/types`)
          .then((res) => res.json())
          .then((data) => setBloodTypes(data));
      }, []);
    
      useEffect(() => {
        fetch(`${apiUrl}/district`)
          .then((res) => res.json())
          .then((data) => setDistricts(data));
      }, []);

      return (
        <OptionContext.Provider value={{ bloodTypes, districts }}>
          {children}
        </OptionContext.Provider>
      );  
  }

  export function useOptions() {
    const context = useContext(OptionContext);
    if (context === undefined) {
      throw new Error("useOptions must be used within an OptionsProvider");
    }
    return context;
  }