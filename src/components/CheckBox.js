function Checkbox({ item, calculate, checked }) {
  return (
    <input
      type='checkbox'
      onChange={() => calculate(item)}
      checked={checked}
      className='h-10 w-10'
    />
  );
}

export default Checkbox;
