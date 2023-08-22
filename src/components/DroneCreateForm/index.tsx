import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "src/components/Input";
import { createDrone } from "src/services/api";
import { CreateButton, FormContainer } from "./styles";

import { Drone } from "src/shared/types";

const DroneForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Drone>();

  const onSubmit: SubmitHandler<Drone> = async (data) => {
    try {
      await createDrone(data);

      alert("Drone created successfully");
    } catch (err) {
      console.error("Failed to create drone:", err);
      const errorMessage =
        (err as any)?.response?.data?.message ||
        "An unexpected error occurred. Please try again.";

      alert(errorMessage);
      //TODO can change this later for more user friendly
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
        pattern={/^[a-zA-Z0-9]{3,}$/}
      />

      <Input
        id="description"
        label="Description"
        register={register}
        errors={errors}
      />

      <Input
        id="position.lat"
        label="Latitude"
        type="number"
        register={register}
        errors={errors}
        required={true}
        min={-90}
        max={90}
      />

      <Input
        id="position.lon"
        label="Longitude"
        type="number"
        register={register}
        errors={errors}
        required={true}
        min={-180}
        max={180}
      />
      <Input
        id="speedMs"
        label="Speed (m/s)"
        type="number"
        register={register}
        errors={errors}
        required={true}
        min={0}
        max={20}
        pattern={/^\d+(\.\d{1,2})?$/}
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

      <CreateButton type="submit">Create Drone</CreateButton>
    </FormContainer>
  );
};

export default DroneForm;
