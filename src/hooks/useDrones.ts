import { useContext } from "react";
import { DroneContext } from "src/contexts/DroneContext";

export const useDrones = () => {
  const context = useContext(DroneContext);

  if (!context) {
    throw new Error("useDrones must be used within a DroneProvider");
  }

  return context;
};
