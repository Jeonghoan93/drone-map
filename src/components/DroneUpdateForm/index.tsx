import React, { useEffect } from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import Input from "src/components/Input";
import { getDroneById, updateDrone } from "src/services/api";
import { FormContainer, UpdateButton } from "./styles";

import { Drone } from "src/shared/types";

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
  } = useForm<Drone>();

  useEffect(() => {
    async function fetchDroneData() {
      try {
        const drone = await getDroneById(droneId);
        setValue("name", drone.name);
        setValue("description", drone.description);
        setValue("speedMs", drone.speedMs);
        setValue("heading", drone.heading);
        setValue("heightMeters", drone.heightMeters);
      } catch (err) {
        console.error("Failed to fetch drone details:", err);
      }
    }

    fetchDroneData();
  }, [droneId, setValue]);

  const onSubmit: SubmitHandler<Drone> = async (data) => {
    try {
      await updateDrone(droneId, data);

      alert("Drone updated successfully");

      onUpdated();
    } catch (err) {
      console.error("Failed to update drone:", err);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="name"
        label="Name (At least 3 alphanumeric characters)"
        register={register as unknown as UseFormRegister<FieldValues>}
        errors={errors}
        required={true}
        pattern={/^[a-zA-Z0-9]{3,}$/}
      />

      <Input
        id="description"
        label="Description"
        register={register as unknown as UseFormRegister<FieldValues>}
        required={true}
        errors={errors}
      />

      <Input
        id="speedMs"
        label="Speed (m/s, between 0 and 20)"
        type="number"
        register={register as unknown as UseFormRegister<FieldValues>}
        errors={errors}
        required={true}
        min={0}
        max={20}
        pattern={/^\d+(\.\d{1,4})?$/}
      />

      <Input
        id="heading"
        label="Heading (Degrees, between 0 and 360)"
        type="number"
        register={register as unknown as UseFormRegister<FieldValues>}
        errors={errors}
        required={true}
        min={0}
        max={360}
        pattern={/^\d+(\.\d{1,4})?$/}
      />

      <Input
        id="heightMeters"
        label="Height (Meters, between 0 and 1000)"
        type="number"
        register={register as unknown as UseFormRegister<FieldValues>}
        errors={errors}
        required={true}
        min={0}
        max={1000}
        pattern={/^\d+(\.\d{1,4})?$/}
      />
      <UpdateButton type="submit">Update Drone</UpdateButton>
    </FormContainer>
  );
};

export default DroneUpdateForm;
