import { useEffect, useRef, useState } from "react";
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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      setIsFilled(inputRef.current.value !== "");
    }
  }, [inputRef]);

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
      {!isFilled && (
        <InputLabel htmlFor={id} error={!!errors[id]}>
          {label}
        </InputLabel>
      )}
    </InputContainer>
  );
};

export default Input;
