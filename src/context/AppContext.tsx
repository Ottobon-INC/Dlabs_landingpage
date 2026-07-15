import { createContext, useContext, useState } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';

export type UserRole = 'Employee' | 'Admin';

export type PatientStatus = 'Incomplete' | 'Completed' | 'Signed';

export interface PatientOrder {
  id: string;
  name: string;
  age: number;
  gender: string;
  testName: string;
  status: PatientStatus;
  date: string;
}

export interface User {
  name: string;
  role: UserRole;
  avatarUrl?: string;
}

interface AppContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  toggleRole: () => void;
  currentView: string;
  setCurrentView: Dispatch<SetStateAction<string>>;
  orders: PatientOrder[];
  addOrder: (order: PatientOrder) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>({
    name: 'Jane Doe',
    role: 'Admin', // Default to Admin for testing all links
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
  });
  const [currentView, setCurrentView] = useState('Registration');
  
  const [orders, setOrders] = useState<PatientOrder[]>([
    { id: 'ACC-10001', name: 'John Doe', age: 34, gender: 'Male', testName: 'Complete Blood Count', status: 'Incomplete', date: '2026-07-10 09:30 AM' },
    { id: 'ACC-10002', name: 'Sarah Connor', age: 29, gender: 'Female', testName: 'Lipid Profile', status: 'Incomplete', date: '2026-07-10 10:15 AM' },
  ]);

  const addOrder = (order: PatientOrder) => {
    setOrders((prev) => [order, ...prev]);
  };

  const toggleRole = () => {
    setUser((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        role: prev.role === 'Admin' ? 'Employee' : 'Admin',
      };
    });
  };

  return (
    <AppContext.Provider value={{ user, setUser, toggleRole, currentView, setCurrentView, orders, addOrder }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
