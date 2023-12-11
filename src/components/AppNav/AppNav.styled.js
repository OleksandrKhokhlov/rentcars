import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppNavLink = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const LinkItem = styled(NavLink)`
  &.active {
    color: red;
  }
`;
