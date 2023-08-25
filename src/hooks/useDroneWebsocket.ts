import { useEffect } from "react";
import { useDrones } from "./useDrones";

const useDroneWebsocket = () => {
  const { setDrones } = useDrones();

  useEffect(() => {
    const socket = new WebSocket("ws://localhost/ws");
    socket.onmessage = (event) => {
      const updatedDrone = JSON.parse(event.data);
      setDrones((prevDrones) =>
        prevDrones.map((drone) =>
          drone.id === updatedDrone.id ? updatedDrone : drone
        )
      );
    };

    return () => {
      socket.close();
    };
  }, [setDrones]);
};

export default useDroneWebsocket;
