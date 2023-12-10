import { useSelector } from 'react-redux';
import { selectVisibleCarsFavorite } from '../../redux/selectors';
import { CarCard } from 'components/CarCard/CarCard';

export const FavoritesCars = () => {
    const favorites = useSelector(selectVisibleCarsFavorite);
    
  return favorites.map(car => <CarCard key={car.id} car={car} />);
};
