import { Boundary, Drone } from "src/shared/types";

export const fakeDronesData: Drone[] = [
  {
    id: 1,
    name: "Drone Alpha",
    description: "A drone for high altitude photography.",
    position: {
      lat: 37.7749,
      lon: -122.4194,
    },
    speedMs: 5.5,
    heading: 45,
    heightMeters: 500,
  },
  {
    id: 2,
    name: "Drone Bravo",
    description: "Used for aerial surveillance.",
    position: {
      lat: 34.0522,
      lon: -118.2437,
    },
    speedMs: 4.8,
    heading: 60,
    heightMeters: 700,
  },
  {
    id: 3,
    name: "Drone Charlie",
    description: "Specialized in weather monitoring.",
    position: {
      lat: 40.7128,
      lon: -74.006,
    },
    speedMs: 6.2,
    heading: 90,
    heightMeters: 600,
  },
  {
    id: 4,
    name: "Drone Delta",
    description: "Used for delivery purposes.",
    position: {
      lat: 51.5074,
      lon: -0.1278,
    },
    speedMs: 5.0,
    heading: 30,
    heightMeters: 100,
  },
];

export const boundaryData: Boundary = {
  centerPoint: {
    lat: 37.7749,
    lon: -122.4194,
  },
  radius: 50,
};
