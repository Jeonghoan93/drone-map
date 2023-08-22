import React from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormRegister,
  useForm,
} from "react-hook-form";
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

      alert("Drone created successfully");
    } catch (err) {
      alert("Failed to create drone:");
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
      <CreateButton type="submit">Create Drone</CreateButton>
    </FormContainer>
  );
};

export default DroneForm;
