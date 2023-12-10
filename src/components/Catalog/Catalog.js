import toast from 'react-hot-toast';
import { fetchCars } from 'api';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCars } from '../../redux/carsSlice';
import { selectVisibleCars } from '../../redux/selectors';
import { CarCard } from '../CarCard/CarCard';

export const CatalogCars = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCars = async () => {
      try {
        const res = await fetchCars();
        if (res.status !== 200) {
          throw new Error();
        }
        dispatch(addCars(res.data));
      } catch (error) {
        toast.error('Something went wrong (((');
      }
    };
    getCars();
  }, [dispatch]);

  const cars = useSelector(selectVisibleCars);

  return cars.map(car => <CarCard key={car.id} car={car} />);
};
