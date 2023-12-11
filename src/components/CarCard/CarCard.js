import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cutAddres } from 'Helper/cutAddress';
import { PopUp } from 'components/PopUp/PopUp';
import { selectFavorites } from '../../redux/selectors';
import { addFavorite, removeFavorite } from '../../redux/favoriteSlice';
import heartSvg from '../../images/heart.svg';
import activheartSvg from '../../images/active .svg';
import {
  Card,
  Description,
  FavoriteBtn,
  ImgCard,
  LearnMoreBtn,
  SpanPrice,
  Title,
  WrapImg,
  WrapTitle,
} from './CarCard.styled';

export const CarCard = ({ car }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const favorite = useSelector(selectFavorites);

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
    <Card>
      <WrapImg>
        <ImgCard src={photoLink} alt={make} />
        <FavoriteBtn type="button" onClick={() => handlerClick(carId)}>
          <img
            src={isFavorite ? activheartSvg : heartSvg}
            alt="Add for favorite"
          />
        </FavoriteBtn>
      </WrapImg>
      <WrapTitle>
        <Title>
          {make} <span>{model ? model : ''}</span>, {year}
        </Title>
        <SpanPrice>{rentalPrice}</SpanPrice>
      </WrapTitle>
      <div>
        <Description>{newAddress + ` | ` + rentalCompany}</Description>
        <Description>
          {type + ` | ` + model + ` | ` + mileage + ` | ` + accessories[2]}
        </Description>
      </div>
      <LearnMoreBtn type="button" onClick={onOpenModal}>
        Learn more
      </LearnMoreBtn>
      <PopUp open={open} onClose={onCloseModal} car={car} />
    </Card>
  );
};
