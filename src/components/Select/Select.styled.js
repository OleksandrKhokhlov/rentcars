import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SelectMake = styled.select`
  width: 224px;
  height: 48px;
  border: none;
  background-color: #f7f7fb;
  margin-bottom: 20px;
  border-radius: 14px;
  &:focus {
    border: 2px solid green;
  }
  &:hover {
    border: 2px solid green;
  }
  &:focus-visible {
    border: none;
  }
`;
