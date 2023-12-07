import { CarCard } from 'components/CarCard/CarCard';
import cars from '../../advertsCars.json';

export const CatalogCars = () => {
  return cars.map(car => {
    return <CarCard key={car.id} car={car} />;
  });
};
