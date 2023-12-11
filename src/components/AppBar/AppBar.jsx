import { Nav } from 'components/AppNav/Nav';
import { Contacts } from 'components/Contacts/Contacts';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Nav />
      <Contacts />
    </Header>
  );
};
