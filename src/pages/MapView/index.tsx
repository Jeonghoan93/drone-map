import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import { getDrones } from "src/services/api"; // Adjust the path accordingly
import { Drone } from "src/shared/types";

const MapView: React.FC = () => {
  const [drones, setDrones] = useState<Drone[]>([]);

  const updateDroneRealTime = (updatedDrone: Drone) => {
    setDrones((prevDrones) => {
      return prevDrones.map((drone) =>
        drone.id === updatedDrone.id ? updatedDrone : drone
      );
    });
  };

  const defaultCenter: [number, number] = [59.3293, 18.0686]; // Default to Stockholm

  useEffect(() => {
    getDrones()
      .then((data) => {
        setDrones(data);
      })
      .catch((err) => {
        throw new Error(err);
      });

    const socket = new WebSocket("ws://localhost/ws");

    socket.onmessage = (event) => {
      const updatedDrone: Drone = JSON.parse(event.data);
      updateDroneRealTime(updatedDrone);
    };

    // close when unmounted.
    return () => {
      socket.close();
    };
  }, []);

  return (
    <MapContainer
      center={defaultCenter}
      zoom={10}
      style={{
        width: "100vw",
        height: "100vh",
      }}
      zoomControl={false}
    >
      <ZoomControl position="bottomright" />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {drones.map((drone) =>
        drone.position ? (
          <Marker
            key={drone.id}
            position={[drone.position.lat, drone.position.lon]}
          >
            <Popup>
              {drone.name}
              <br />
              {drone.description}
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
};

export default React.memo(MapView);
