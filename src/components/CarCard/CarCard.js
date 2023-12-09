import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cutAddres } from 'Helper/cutAddress';
import { PopUp } from 'components/PopUp/PopUp';
import { getFavorites } from '../../redux/selectors';
import { addFavorite, removeFavorite } from '../../redux/favoriteSlice';
import heartSvg from '../../images/heart.svg';
import activheartSvg from '../../images/active .svg';

export const CarCard = ({ car }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const favorite = useSelector(getFavorites);

  const dispatch = useDispatch();

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
    id: carId,
  } = car;
  const newAddress = cutAddres(address);
  const isFavorite = favorite.find(car => car.id === carId);

  const handlerClick = () => {
    if (isFavorite) {
      return dispatch(removeFavorite(isFavorite.id));
    }
    return dispatch(addFavorite(car));
  };

  return (
    <div>
      <img src={photoLink} alt={make} width={274} />
      <button type="button" onClick={() => handlerClick(carId)}>
        <img
          src={isFavorite ? activheartSvg : heartSvg}
          alt="Add for favorite"
        />
      </button>
      <div>
        <h2>
          {make} <span>{model ? model : ''}</span>, {year}
        </h2>
        <span>{rentalPrice}</span>
      </div>
      <div>
        <p>{newAddress + ` | ` + rentalCompany}</p>
        <p>{type + ` | ` + model + ` | ` + mileage + ` | ` + accessories[2]}</p>
      </div>
      <button type="button" onClick={onOpenModal}>
        Learn more
      </button>
      <PopUp open={open} onClose={onCloseModal} car={car} />
    </div>
  );
};
