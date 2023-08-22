export type Position = {
  lat: number;
  lon: number;
};

export type Drone = {
  id?: number;
  name: string;
  description: string;
  position?: Position;
  speedMs: number;
  heading: number;
  heightMeters: number;
};

export type Boundary = {
  centerPoint: Position;
  radius: number;
};
