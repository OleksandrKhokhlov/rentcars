import { cutAddres } from 'Helper/cutAddress';

export const CarCard = ({ car }) => {
  const {
    photoLink,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
  } = car;
  const newAddress = cutAddres(address);

  return (
    <div>
      <img src={photoLink} alt={make} width={274} />
      <div>
        <h3>
          {make} <span>{model ? model : ''}</span>, {year}
        </h3>
        <span>{rentalPrice}</span>
      </div>
      <div>
        <p>{newAddress + ` | ` + rentalCompany}</p>
        <p>{type + ` | ` + model + ` | ` + mileage + ` | ` + accessories[2]}</p>
      </div>
      <button type="button">Learn more</button>
    </div>
  );
};
