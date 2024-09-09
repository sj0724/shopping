import { useRecoilState } from 'recoil';
import { productFilterState } from '../states/productFilterState';

const SORT_OPTIONS = [
  { value: 'basic', text: '기본' },
  { value: 'score', text: '스코어순' },
  { value: 'price', text: '가격순' },
];

function SelectorOption() {
  const [filter, setfilter] = useRecoilState(productFilterState);

  const updateFilter = ({ target: { value } }) => {
    setfilter(value);
  };

  return (
    <select
      value={filter}
      onChange={updateFilter}
      className='h-10 border rounded-md p-2 cursor-pointer'
    >
      {SORT_OPTIONS.map((item) => (
        <option key={item.value} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  );
}

export default SelectorOption;
