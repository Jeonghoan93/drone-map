import React from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormRegister,
  useForm,
} from "react-hook-form";
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
      alert("An unexpected error occurred. Please try again.");
      //TODO can change this later for more user friendly
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="name"
        label="Name (At least 3 alphanumeric characters)"
        register={register}
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
        id="position.lat"
        label="Latitude (Between -90 and 90)"
        type="number"
        register={register}
        errors={errors}
        required={true}
        min={-90}
        max={90}
      />

      <Input
        id="position.lon"
        label="Longitude (Between -180 and 180)"
        type="number"
        register={register}
        errors={errors}
        required={true}
        min={-180}
        max={180}
      />

      <Input
        id="speedMs"
        label="Speed (m/s, between 0 and 20)"
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
        label="Heading (Degrees, between 0 and 360)"
        type="number"
        register={register}
        errors={errors}
        required={true}
        min={0}
        max={360}
      />

      <Input
        id="heightMeters"
        label="Height (Meters, between 0 and 1000)"
        type="number"
        register={register}
        errors={errors}
        required={true}
        min={0}
        max={1000}
      />

      <CreateButton type="submit">Create Drone</CreateButton>
    </FormContainer>
  );
};

export default DroneForm;
