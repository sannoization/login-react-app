import {FC, useState} from "react";
import {filterItems, foods} from "./constants";

type Props = {
    query: string;
    handleChange: (e: any) => void
}

const FilterableList = () => {
  const [query, setQuery] = useState('');
  const results = filterItems(foods, query);
  function handleChange(e: any) {
    setQuery(e.target.value);
  }

  return (
      <>
        <SearchBar query={query} handleChange={handleChange} />
        <hr />
        <List items={results} />
      </>
  );
}

const SearchBar: FC<Props> = ({query, handleChange}) => {

  return (
      <label>
        Search:{' '}
        <input
            value={query}
            onChange={handleChange}
        />
      </label>
  );
}

const List = (items: any ) => {
  return (
      <table>
        <tbody>
        {items.map(food => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.description}</td>
            </tr>
        ))}
        </tbody>
      </table>
  );
}

export default FilterableList;