import { Nav } from 'components/AppNav/Nav';
import { Contacts } from 'components/Contacts/Contacts';

export const AppBar = () => {
  return (
    <header>
      <Nav />
      <Contacts />
    </header>
  );
};
