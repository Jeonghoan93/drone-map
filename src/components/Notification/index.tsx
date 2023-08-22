import React from "react";

interface NotificationProps {
  message: string;
  type?: "success" | "error" | "info"; // Types of notifications you might want to handle
}

const Notification: React.FC<NotificationProps> = ({
  message,
  type = "info",
}) => {
  return <div className={`notification ${type}`}>{message}</div>;
};

export default Notification;
