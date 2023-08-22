import React, { useEffect, useState } from "react";
import { deleteDrone, getDrones } from "src/services/api";
import { Drone } from "src/shared/types";

import DroneUpdateForm from "../DroneUpdateForm";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  DroneListContainer,
  DroneListHeader,
  DroneTable,
  ErrorMessage,
} from "./styles";

const DroneList: React.FC = () => {
  const [drones, setDrones] = useState<Drone[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [expandedDroneId, setExpandedDroneId] = useState<
    number | null | undefined
  >(null);

  useEffect(() => {
    const fetchDrones = async () => {
      try {
        const fetchedDrones = await getDrones();

        setDrones(fetchedDrones);
      } catch (err) {
        setError("Failed to fetch drones");
      }
    };

    fetchDrones();
  }, []);

  const handleDelete = async (id: number | undefined) => {
    if (!id) return;

    try {
      await deleteDrone(id);

      alert("Drone deleted successfully");

      setDrones((prevDrones) => prevDrones.filter((drone) => drone.id !== id));
    } catch (err) {
      setError("Failed to delete drone");
      alert("Failed to delete drone");
    }
  };

  return (
    <DroneListContainer>
      <DroneListHeader>Drones List</DroneListHeader>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <DroneTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Speed (m/s)</th>
            <th>Height (m)</th>
            <th>Heading</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {drones.map((drone) => (
            <React.Fragment key={drone.id}>
              <tr key={drone.id}>
                <td>{drone.name}</td>
                <td>{drone.description}</td>
                <td>{drone.speedMs}</td>
                <td>{drone.heightMeters}</td>
                <td>{drone.heading}</td>
                <td>
                  <div className="action-buttons">
                    <button onClick={() => handleDelete(drone.id)}>
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        setExpandedDroneId(
                          drone.id === expandedDroneId ? null : drone.id
                        )
                      }
                    >
                      Update
                      {expandedDroneId === drone.id ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
              {expandedDroneId === drone.id && (
                <tr>
                  <td colSpan={/* Number of your columns */ 8}>
                    <DroneUpdateForm
                      droneId={drone.id!}
                      onUpdated={() => setExpandedDroneId(null)}
                    />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </DroneTable>
    </DroneListContainer>
  );
};

export default DroneList;
