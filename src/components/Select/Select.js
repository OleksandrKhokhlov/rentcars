import { useDispatch } from 'react-redux';
import { filterCarByMake } from '../../redux/filterSlice';
import { Label, SelectMake } from './Select.styled';

export const Select = ({ label, placeholder, options }) => {
  const dispatch = useDispatch();

  const handlerChange = event => {
    dispatch(filterCarByMake(event.target.value));
  };

  return (
    <>
      <Label>
        {label}
        <SelectMake name="filter" id="select" onChange={handlerChange}>
          <option value="">{placeholder}</option>
          {options?.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </SelectMake>
      </Label>
    </>
  );
};
