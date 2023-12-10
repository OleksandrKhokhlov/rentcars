import { Select } from 'components/Select/Select';
import { brand } from '../../selectData';

export const Filter = () => {
  return (
    <div>
      <Select label="Car brand" placeholder="Enter the text" options={brand} />
    </div>
  );
};
