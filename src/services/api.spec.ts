import fetchMock from "fetch-mock";
import { Drone } from "src/shared/types";
import * as api from "./api";

beforeEach(() => {
  fetchMock.restore();
});

describe("API methods", () => {
  it("fetches drones successfully", async () => {
    const mockDrones: Drone[] = [
      {
        id: 1,
        name: "Drone1",
        description: "Sample drone",
        position: { lat: 40, lon: 50 },
        speedMs: 5,
        heading: 60,
        heightMeters: 100,
      },
    ];

    fetchMock.mock(`${api.BASE_URL}/drones`, JSON.stringify(mockDrones), {
      method: "GET",
    });

    const result = await api.getDrones();
    expect(result).toEqual(mockDrones);
  });

  it("fetches drone by ID successfully", async () => {
    const mockDrone: Drone = {
      id: 1,
      name: "Drone1",
      description: "Sample drone",
      position: { lat: 40, lon: 50 },
      speedMs: 5,
      heading: 60,
      heightMeters: 100,
    };

    fetchMock.mock(`${api.BASE_URL}/drones/1`, JSON.stringify(mockDrone), {
      method: "GET",
    });

    const result = await api.getDroneById(1);
    expect(result).toEqual(mockDrone);
  });

  it("creates a drone successfully", async () => {
    const newDroneData = {
      name: "NewDrone",
      description: "New sample drone",
      position: { lat: 50, lon: 60 },
      speedMs: 6,
      heading: 70,
      heightMeters: 110,
    };

    const mockExistingDrones: Drone[] = [
      {
        id: 1,
        name: "Drone1",
        description: "Sample drone",
        position: { lat: 40, lon: 50 },
        speedMs: 5,
        heading: 60,
        heightMeters: 100,
      },
    ];
    fetchMock.mock(
      `${api.BASE_URL}/drones`,
      JSON.stringify(mockExistingDrones),
      {
        method: "GET",
      }
    );

    const mockResponse: Drone = {
      id: 2,
      ...newDroneData,
    };
    fetchMock.mock(`${api.BASE_URL}/drones`, JSON.stringify(mockResponse), {
      method: "POST",
    });

    const result = await api.createDrone(newDroneData);
    expect(result).toEqual(mockResponse);
  });
});
