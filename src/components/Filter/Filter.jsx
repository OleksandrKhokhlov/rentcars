import { Select } from 'components/Select/Select';
import { brand, price } from '../../selectData';

export const Filter = () => {
  return (
    <div>
      <Select label="Car brand" placeholder="Enter the text" options={brand} />
      <Select label="Price/ 1 hour" placeholder="To $" options={price} />
      <label>
        Car mileage/ km
        <input type="text" value="from" name='from'/>
        <input type="text" value="to" name='to'/>
      </label>
      <button type="button">Search</button>
    </div>
  );
};
