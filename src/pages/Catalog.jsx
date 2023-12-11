import { fetchCars } from 'api';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { CatalogCars } from 'components/Catalog/Catalog';
import { Filter } from 'components/Filter/Filter';
import { loadMoreCars } from '../redux/carsSlice';
import { LoadMoreBtn } from './Catalog.styled';

export default function CatalogPage() {
  const dispatch = useDispatch();
  let page = 2;

  const handlerOnClick = async () => {
    try {
      const res = await fetchCars(page);
      if (res.status !== 200) {
        throw new Error();
      }
      dispatch(loadMoreCars(res.data));
      page += 1;
    } catch (error) {
      toast.error('Something went wrong (((');
    }
  };

  return (
    <>
      <Filter />
      <CatalogCars />
      <LoadMoreBtn type="button" onClick={handlerOnClick}>
        Load more
      </LoadMoreBtn>
    </>
  );
}
