import { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { InputContainer, InputLabel, StyledInput } from "./styles";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  required,
  errors,
}) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <InputContainer>
      <StyledInput
        id={id}
        type={type}
        disabled={disabled}
        error={!!errors[id]}
        {...register(id, { required })}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue === "" && (
        <InputLabel error={!!errors[id]}>{label}</InputLabel>
      )}
    </InputContainer>
  );
};

export default Input;
