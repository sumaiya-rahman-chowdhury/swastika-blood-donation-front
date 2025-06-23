"use client";

import { User } from "@/static/types";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {  OptionsProvider } from "./OptionContext";

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<UserContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // set user from localStorage
    }
  }, []);
  
//   console.log(user,"This is from Auth Context")
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OptionsProvider>
      {children}
      </OptionsProvider>
    </AuthContext.Provider>
  );
}

export function useUser() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useUser must be used inside a UserProvider");
    }
    return context;
  }