import { Drone } from "src/shared/types";

export const BASE_URL = "http://localhost:80";

export const getDrones = async (): Promise<Drone[]> => {
  const response = await fetch(`${BASE_URL}/drones`);
  if (!response.ok) {
    throw new Error("Failed to fetch drones");
  }
  return response.json();
};

export const getDroneById = async (id: number): Promise<Drone> => {
  const response = await fetch(`${BASE_URL}/drones/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch drone by id");
  }
  return response.json();
};

export const createDrone = async (
  droneData: Omit<Drone, "id">
): Promise<Drone> => {
  const allDrones = await getDrones();
  const highestId = allDrones.reduce(
    (maxId, drone) => Math.max(maxId, drone.id || 0),
    0
  );

  const newDroneData = {
    ...droneData,
    id: highestId + 1,
  };

  const response = await fetch(`${BASE_URL}/drones`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDroneData),
  });
  if (!response.ok) {
    const errorMsg = await response.text();
    throw new Error(`Failed to create drone: ${errorMsg}`);
  }
  return response.json();
};

export const updateDrone = async (
  id: number,
  droneData: Omit<Drone, "id">
): Promise<Drone> => {
  const response = await fetch(`${BASE_URL}/drones/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(droneData),
  });
  if (!response.ok) {
    throw new Error("Failed to update drone");
  }
  return response.json();
};

export const deleteDrone = async (id: number): Promise<Drone> => {
  const response = await fetch(`${BASE_URL}/drones/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete drone");
  }
  return response.json();
};
