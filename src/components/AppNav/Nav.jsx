import { Link, NavLink } from "react-router-dom"
import logo from 'images/logo.png'

export const Nav = () => {
    return (
      <nav>
        <Link to={'/'}>
          <img src={logo} alt="logo" width='70px'/>
        </Link>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/catalog'}>Catalog</NavLink>
        <NavLink to={'/favorites'}>Favorites</NavLink>
      </nav>
    );
}