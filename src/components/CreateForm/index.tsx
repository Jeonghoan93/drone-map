import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "src/components/Input";
import { createDrone } from "src/services/api";
import { Drone } from "src/shared/types.ts";
import { CreateButton, FormContainer } from "./styles.ts";

const DroneForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Drone>();

  const onSubmit: SubmitHandler<Drone> = async (data) => {
    try {
      await createDrone(data);
      console.log("Drone created successfully");
    } catch (err) {
      console.error("Failed to create drone:", err);
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
        id="position.lat"
        label="Latitude"
        type="number"
        register={register}
        errors={errors}
        required={true}
      />

      <Input
        id="position.lon"
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

      <CreateButton type="submit">Create Drone</CreateButton>
    </FormContainer>
  );
};

export default DroneForm;
