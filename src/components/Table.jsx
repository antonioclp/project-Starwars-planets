import React, { useState, useEffect } from 'react';
import getPlanets from '../services/starWarsApi';
import Loading from './Loading';

function Table() {
  const [getData, setData] = useState([]);

  const [loading, setLoaded] = useState(false);

  const [textFilter, setTextFilter] = useState('');

  const [column, setColumnFilter] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [valueNumber, setValueNumber] = useState(0);
  const [filters, setFilters] = useState([]);
  const [filteredDataAPI, setFilteredDataAPI] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getPlanets();
      results.forEach((planet) => {
        delete planet.residents;
      });
      setData(results);
    };
    fetchData();
  }, [setData]);

  useEffect(() => {
    if (getData) {
      setLoaded(true);
    }
  }, [getData]);

  const textHandleChange = ({ target: { value } }) => {
    setTextFilter(value);
    const values = Object.values(getData);
    const newArr = values.filter((each) => {
      const lowerCase = each.name.toLowerCase();
      const lowerValue = value.toLowerCase();
      return lowerCase.includes(lowerValue);
    });
    setFilteredDataAPI(newArr);
  };

  useEffect(() => {
    console.log(filters);
    let data = getData;
    filters.forEach((i) => {
      data = data.filter((item) => {
        switch (i.operator) {
        case 'maior que':
          return Number(item[i.column]) > Number(i.valueNumber);
        case 'menor que':
          return Number(item[i.column]) < Number(i.valueNumber);
        case 'igual a':
          return Number(item[i.column]) === Number(i.valueNumber);
        default:
          return false;
        }
      });
    });
    setFilteredDataAPI(data);
  }, [getData, filters]);

  return !loading ? <Loading /> : (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ textFilter }
        onChange={ textHandleChange }
      />
      <select
        data-testid="column-filter"
        value={ column }
        onChange={
          ({ target }) => setColumnFilter((target.value))
        }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ operator }
        onChange={ ({ target }) => setOperator(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ valueNumber }
        onChange={ ({ target }) => setValueNumber(target.value) }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => setFilters(
          (prev) => [...prev, { column, operator, valueNumber }],
        ) }
      >
        Filtrar
      </button>
      <div>
        {
          filters.map((filterItem, index) => (
            <div key={ index } style={ { display: 'flex', gap: '30px' } }>
              <p>{filterItem.column}</p>
              <p>{filterItem.operator}</p>
              <p>{filterItem.valueNumber}</p>
              <button
                type="button"
                onClick={ () => setFilters(filters.filter((i) => i !== filterItem)) }
              >
                X
              </button>
            </div>
          ))
        }
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation period</th>
            <th>Orbital period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {filteredDataAPI.map((i) => (
            <tr key={ i.name }>
              <td>{i.name}</td>
              <td>{i.rotation_period}</td>
              <td>{i.orbital_period}</td>
              <td>{i.diameter}</td>
              <td>{i.climate}</td>
              <td>{i.gravity}</td>
              <td>{i.terrain}</td>
              <td>{i.surface_water}</td>
              <td>{i.population}</td>
              <td>{i.films}</td>
              <td>{i.created}</td>
              <td>{i.edited}</td>
              <td>{i.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
