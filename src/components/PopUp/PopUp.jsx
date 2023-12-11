import { Modal } from 'react-responsive-modal';
import { cutAddres } from 'Helper/cutAddress';

import { Description, ImgCard } from 'components/CarCard/CarCard.styled';
import { Title } from 'pages/Home.styled';
import {
  Accent,
  DescModal,
  RentalCarBtn,
  RentalConditionDesc,
  RentalConditionsSection,
} from './PopUp.styled';
import { formatMileage } from 'Helper/formatMileage';

export const PopUp = ({ open, onClose, car }) => {
  const {
    photoLink,
    make,
    model,
    year,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = car;
  const newAddress = cutAddres(address);
  const newRentalConditions = rentalConditions.split('\n');
  const age = newRentalConditions[0].split(':');
  const accessoriesString = accessories.join(' | ');
  const functionalitiesString = functionalities.join(' | ');
  const formattedResult = formatMileage(mileage);

  return (
    <Modal open={open} onClose={onClose} center>
      <ImgCard src={photoLink} alt={make} width={461} />
      <Title>
        {make} {model}, {year}
      </Title>
      <Description>
        {newAddress} | id:{id} | Year:{year} | Type:{type}
      </Description>
      <Description>
        Fuel Consumption:{fuelConsumption} | Engine size:{engineSize}
      </Description>
      <DescModal>{description}</DescModal>
      <DescModal>Accessories and functionalities:</DescModal>
      <Description>{accessoriesString}</Description>
      <Description>{functionalitiesString}</Description>
      <DescModal>Rental Conditions: </DescModal>
      <RentalConditionsSection>
        <RentalConditionDesc>
          {age[0]}: <Accent>{age[1]}</Accent>
        </RentalConditionDesc>
        <RentalConditionDesc>{newRentalConditions[1]}</RentalConditionDesc>
        <RentalConditionDesc>{newRentalConditions[2]}</RentalConditionDesc>
        <RentalConditionDesc>
          Mileage: <Accent>{formattedResult}</Accent>
        </RentalConditionDesc>
        <RentalConditionDesc>
          Price: <Accent>{rentalPrice}</Accent>
        </RentalConditionDesc>
      </RentalConditionsSection>
      <RentalCarBtn href="tel:+380730000000">Rental car</RentalCarBtn>
    </Modal>
  );
};
