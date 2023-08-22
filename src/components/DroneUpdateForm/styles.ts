import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: white;
  padding: 10px;

  margin: auth 0;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const CreateButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 12px 20px;
  border: none;

  border-radius: 5px;
  cursor: pointer;

  margin-top: 20px;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;
