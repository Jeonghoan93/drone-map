const socket = new WebSocket("ws://localhost/ws");

socket.addEventListener("message", (event) => {
  console.log("Received:", event.data);
});

export default socket;
