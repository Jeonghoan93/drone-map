import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "src/components/Input";
import { getDroneById, updateDrone } from "src/services/api";
import { CreateButton, FormContainer } from "./styles";

type FormValues = {
  name: string;
  description: string;
  lat: number;
  lon: number;
  speedMs: number;
  heading: number;
  heightMeters: number;
};

interface DroneUpdateFormProps {
  droneId: number;
  onUpdated: () => void;
}

const DroneUpdateForm: React.FC<DroneUpdateFormProps> = ({
  droneId,
  onUpdated,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  useEffect(() => {
    async function fetchDroneData() {
      try {
        const drone = await getDroneById(droneId);
        setValue("name", drone.name);
        setValue("description", drone.description);
        setValue("lat", drone.position?.lat);
        setValue("lon", drone.position?.lon);
        setValue("speedMs", drone.speedMs);
        setValue("heading", drone.heading);
        setValue("heightMeters", drone.heightMeters);
      } catch (err) {
        console.error("Failed to fetch drone details:", err);
      }
    }

    fetchDroneData();
  }, [droneId, setValue]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await updateDrone(droneId, data);

      onUpdated();
    } catch (err) {
      console.error("Failed to update drone:", err);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="name"
        label="Name"
        register={register}
        errors={errors}
        required={true}
      />
      <Input
        id="description"
        label="Description"
        register={register}
        errors={errors}
      />
      <Input
        id="lat"
        label="Latitude"
        type="number"
        register={register}
        errors={errors}
        required={true}
      />
      <Input
        id="lon"
        label="Longitude"
        type="number"
        register={register}
        errors={errors}
        required={true}
      />
      <Input
        id="speedMs"
        label="Speed (m/s)"
        type="number"
        register={register}
        errors={errors}
        required={true}
      />
      <Input
        id="heading"
        label="Heading (degrees)"
        type="number"
        register={register}
        errors={errors}
        required={true}
      />
      <Input
        id="heightMeters"
        label="Height (meters)"
        type="number"
        register={register}
        errors={errors}
        required={true}
      />
      <CreateButton type="submit">Update Drone</CreateButton>
    </FormContainer>
  );
};

export default DroneUpdateForm;
