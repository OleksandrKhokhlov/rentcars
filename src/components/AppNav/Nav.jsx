import { Link } from 'react-router-dom';
import logo from 'images/logo.png';
import { AppNavLink, LinkItem } from './AppNav.styled';

export const Nav = () => {
  return (
    <AppNavLink>
      <Link to={'/'}>
        <img src={logo} alt="logo" width="70px" />
      </Link>
      <LinkItem to={'/'}>Home</LinkItem>
      <LinkItem to={'/catalog'}>Catalog</LinkItem>
      <LinkItem to={'/favorites'}>Favorites</LinkItem>
    </AppNavLink>
  );
};
