import { useState } from 'react';
import { fetchCars } from 'api';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { CatalogCars } from 'components/Catalog/Catalog';
import { Filter } from 'components/Filter/Filter';
import { loadMoreCars } from '../redux/carsSlice';
import { LoadMoreBtn } from './Catalog.styled';

export default function CatalogPage() {
  const [isVisible, setisVisible] = useState(true);

  const dispatch = useDispatch();
  let page = 2;

  const handlerOnClick = async () => {
    try {
      const res = await fetchCars(page);
      if (res.data.length < 12) {
        setisVisible(false);
      }
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
      {isVisible ? (
        <LoadMoreBtn type="button" onClick={handlerOnClick}>
          Load more
        </LoadMoreBtn>
      ) : null}
    </>
  );
}
