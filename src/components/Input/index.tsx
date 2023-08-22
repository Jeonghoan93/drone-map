import { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { InputContainer, InputLabel, StyledInput } from "./styles";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean | string;
  pattern?: RegExp;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  min?: number;
  max?: number;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  required,
  pattern,
  errors,
  min,
  max,
}) => {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <InputContainer>
      <StyledInput
        id={id}
        type={type}
        disabled={disabled}
        error={!!errors[id]}
        min={min}
        max={max}
        step={type === "number" ? "0.0001" : undefined}
        {...register(id, { required, pattern })}
        onChange={(e) => {
          setIsFilled(e.target.value !== "");
        }}
      />
      <InputLabel htmlFor={id} isFilled={isFilled} error={!!errors[id]}>
        {label}
      </InputLabel>
    </InputContainer>
  );
};

export default Input;
