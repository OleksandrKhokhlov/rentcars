import styled from '@emotion/styled';
import img from '../../images/artage-io-1769719_1702202607.png';

export const Header = styled.header`
  color: black;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 15px;
  background-image: linear-gradient(
      90deg,
      rgba(207, 236, 208, 0.7),
      rgba(160, 206, 167, 0.8),
      rgba(158, 192, 219, 0.9)
    ),
    url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
