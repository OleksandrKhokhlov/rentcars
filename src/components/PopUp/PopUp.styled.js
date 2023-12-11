import styled from '@emotion/styled';

export const DescModal = styled.p`
  color: black;
  font-size: 14px;
  margin: 14px 0;
`;

export const SubTitleModal = styled.h3`
  color: black;
`;

export const RentalCarBtn = styled.a`
  display: inline-block;
  line-height: 2;
  text-align: center;
  width: 168px;
  height: 44px;
  margin: 0;
  margin-top: 24px;
  border: none;
  border-radius: 12px;
  background-color: var(--primary-brand);
  color: white;
  cursor: pointer;
  &:hover {
    background-color: var(--hover-color);
  }
`;

export const RentalConditionsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const RentalConditionDesc = styled.p`
  padding: 7px 14px;

  color: black;
  background-color: #e9f3e3;
  border-radius: 35px;
  font-size: 12px;
  text-align: center;
  line-height: 2.5;
`;

export const Accent = styled.span`
  color: var(--primary-brand);
`;