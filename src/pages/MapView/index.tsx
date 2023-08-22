import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { getDrones } from "src/services/api"; // Adjust the path accordingly
import { Drone } from "src/shared/types";

const MapView: React.FC = () => {
  const [drones, setDrones] = useState<Drone[]>([]);

  const mapCenter: [number, number] = drones.length
    ? [
        drones.reduce(
          (acc, drone) => (drone.position ? acc + drone.position.lat : acc),
          0
        ) / drones.length,
        drones.reduce(
          (acc, drone) => (drone.position ? acc + drone.position.lon : acc),
          0
        ) / drones.length,
      ]
    : [59.3293, 18.0686]; // Default to Stockholm

  useEffect(() => {
    const fetchDrones = async () => {
      try {
        const dronesData = await getDrones();
        setDrones(dronesData);
      } catch (error) {
        console.error("Error fetching drones:", error);
      }
    };
    fetchDrones();
  }, []);

  return (
    <MapContainer
      center={mapCenter}
      zoom={13}
      style={{ width: "100%", height: "600px" }}
    >
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

export default MapView;
