import { useDispatch } from 'react-redux';
import { filterCarByMake } from '../../redux/filterSlice';

export const Select = ({ label, placeholder, options }) => {
  const dispatch = useDispatch();
  

  const handlerChange = event => {
    dispatch(filterCarByMake(event.target.value));
  };

  return (
    <>
      <label>
        {label}
        <select name="filter" id="select" onChange={handlerChange}>
          <option value="">{placeholder}</option>
          {options?.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </label>
    </>
  );
};
