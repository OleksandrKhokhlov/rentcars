import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleCarsFavorite } from '../../redux/selectors';
import { CarCard } from 'components/CarCard/CarCard';
import { CatalogSection } from 'components/Catalog/Catalog.styled';
import { filterCarByMake } from '../../redux/filterSlice';

export const FavoritesCars = () => {
  const favorites = useSelector(selectVisibleCarsFavorite);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterCarByMake(''));
  }, [dispatch]);

  return (
    <CatalogSection>
      {favorites.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </CatalogSection>
  );
};
