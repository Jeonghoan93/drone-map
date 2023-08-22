import React, { useEffect, useState } from "react";
import { deleteDrone } from "src/services/api";
import { Drone } from "src/shared/types";

import { fakeDronesData } from "src/assets/fake-data";

const DroneList: React.FC = () => {
  const [drones, setDrones] = useState<Drone[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDrones = async () => {
      try {
        // const fetchedDrones = await getDrones();

        setDrones(fakeDronesData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDrones();
  }, []);

  const handleDelete = async (id: number | undefined) => {
    if (!id) return;

    try {
      await deleteDrone(id);
      setDrones((prevDrones) => prevDrones.filter((drone) => drone.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Drones List</h2>
      {error && <p>{error}</p>}
      <table>
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
            <tr key={drone.id}>
              <td>{drone.name}</td>
              <td>{drone.description}</td>
              <td>{drone.speedMs}</td>
              <td>{drone.heightMeters}</td>
              <td>{drone.heading}</td>
              <td>
                <button onClick={() => handleDelete(drone.id)}>Delete</button>
                {/* You can add an Update button here to navigate to the update form */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DroneList;
