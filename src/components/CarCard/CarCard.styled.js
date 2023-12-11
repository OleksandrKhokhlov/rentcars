import styled from '@emotion/styled';

export const Card = styled.div`
  width: calc(100% / 4 - 20px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgCard = styled.img`
  object-fit: cover;
  width: 100%;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 8px;
`;

export const WrapImg = styled.div`
  position: relative;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 5px;
  border: none;
  background-color: transparent;
`;

export const LearnMoreBtn = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 12px;
  background-color: var(--primary-brand);
  color: white;
  cursor: pointer;
  &:hover {
    background-color: var(--hover-color);
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  color: black;
`;

export const WrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const SpanPrice = styled.span`
  color: var(--primary-brand);
`;

export const Description = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
`;
