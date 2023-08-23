import { createContext, useState } from "react";
import { Drone } from "src/shared/types";

interface DroneContextProps {
  drones: Drone[];
  setDrones: React.Dispatch<React.SetStateAction<Drone[]>>;
}

export const DroneContext = createContext<DroneContextProps | undefined>(
  undefined
);

type DroneProviderProps = {
  children: React.ReactNode;
};

export const DroneProvider: React.FC<DroneProviderProps> = ({ children }) => {
  const [drones, setDrones] = useState<Drone[]>([]);
  return (
    <DroneContext.Provider value={{ drones, setDrones }}>
      {children}
    </DroneContext.Provider>
  );
};
