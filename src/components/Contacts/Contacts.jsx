import { ContactsList } from "./Contacts.styled";

export const Contacts = () => {
  return (
    <ContactsList>
      <li>
        <a href="mailto:info@rentcars.com">email: info@rentcars.com</a>
      </li>
      <li>
        <a href="tel:+380730000000">phone: +380730000000</a>
      </li>
    </ContactsList>
  );
};
