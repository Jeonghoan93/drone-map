import React, { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import { useDrones } from "src/hooks/useDrones";
import useDroneWebsocket from "src/hooks/useDroneWebsocket";
import { getDrones } from "src/services/api";

const MapView: React.FC = () => {
  const { drones, setDrones } = useDrones();
  const defaultCenter: [number, number] = [59.3293, 18.0686];

  useDroneWebsocket();

  useEffect(() => {
    getDrones()
      .then((data) => {
        setDrones(data);
      })
      .catch((err) => {
        console.error("Failed to fetch drones:", err);
      });
  }, [setDrones]);

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
