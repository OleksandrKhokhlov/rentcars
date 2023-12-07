export const Select = ({ label, placeholder, options }) => {
  return (
    <>
      <label>
        {label}
        <select name="filter" id="select">
          <option value="" disabled>
            {placeholder}
          </option>
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
