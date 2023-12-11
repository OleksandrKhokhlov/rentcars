import { HeroTitle, SubTitle, Title } from './Home.styled';

export default function HomePage() {
  return (
    <>
      <HeroTitle>AutoRental Express</HeroTitle>
      <Title>Description:</Title>
      <p>
        AutoRental Express is a highly professional company specializing in
        providing car rental services for clients with various needs and
        preferences. We offer a wide selection of modern cars from different
        classes and budgets, ensuring our clients reliable and comfortable
        transportation for various journeys and events.
      </p>
      <Title>Our Services:</Title>
      <ul>
        <li>
          <SubTitle>Various Car Classes:</SubTitle> From economy to executive classes, we
          provide different options to meet the needs of every client.
        </li>
        <li>
          <SubTitle>Flexible Rental System:</SubTitle> We offer short-term and long-term
          rentals, as well as the option to rent with or without a driver to
          accommodate various requirements.
        </li>
        <li>
          <SubTitle>Technical Support:</SubTitle> Our fleet undergoes regular maintenance to
          ensure the safety and reliability of our vehicles.
        </li>
        <li>
          <SubTitle>24/7 Support:</SubTitle> Our customer support is ready to answer your
          questions and address any inquiries at any time of the day.
        </li>
      </ul>
      <Title>Our Mission:</Title>
      <p>
        Our mission is to provide affordable, convenient, and reliable
        transportation for our clients, fostering their freedom of movement and
        opening new opportunities for travel and business.
      </p>
    </>
  );
}
