import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "src/components/Input";
import { createDrone } from "src/services/api";
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

const DroneForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await createDrone(data);
      console.log("Drone created successfully");
      // You can reset the form, redirect user or show success message here
    } catch (err) {
      console.error("Failed to create drone:", err);
      // Handle error, e.g., show an error message to the user
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
