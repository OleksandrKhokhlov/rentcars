import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { cutAddres } from 'Helper/cutAddress';

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
  const accessoriesString = accessories.join('| ');
  const functionalitiesString = functionalities.join('| ');

  return (
    <Modal open={open} onClose={onClose} center>
      <img src={photoLink} alt={make} width={461} />
      <h2>
        {make} {model}, {year}
      </h2>
      <p>
        {newAddress} | id:{id} | Year:{year} | Type:{type}
      </p>
      <p>
        Fuel Consumption:{fuelConsumption} | Engine size:{engineSize}
      </p>
      <p>{description}</p>
      <h3>Accessories and functionalities:</h3>
      <p>{accessoriesString}</p>
      <p>{functionalitiesString}</p>
      <h3>Rental Conditions: </h3>
      <p>{rentalConditions}</p>
      <p>Mileage: {mileage / 1000}</p>
      <p>Price: {rentalPrice}</p>
      <a href="tel:+380730000000">Rental car</a>
    </Modal>
  );
};
