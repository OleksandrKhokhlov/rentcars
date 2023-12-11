import { useSelector } from 'react-redux';
import { selectVisibleCarsFavorite } from '../../redux/selectors';
import { CarCard } from 'components/CarCard/CarCard';
import { CatalogSection } from 'components/Catalog/Catalog.styled';

export const FavoritesCars = () => {
  const favorites = useSelector(selectVisibleCarsFavorite);

  return (
    <CatalogSection>
      {favorites.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </CatalogSection>
  );
};
