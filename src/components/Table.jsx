import React, { useState, useEffect, useContext } from 'react';
import { planetsContext } from '../context/myContext';
import InputFilter from './InputFilter';
import Loading from './Loading';

function Table() {
  const getData = useContext(planetsContext);

  const [trHtml, setTrHtml] = useState('');
  const [loading, setLoaded] = useState(false);
  const [textFilter, setTextFilter] = useState('');

  const setTrItems = (values) => {
    setTrHtml(values);
    setLoaded(true);
  };

  const textHandleChange = ({ target: { value } }) => {
    setTextFilter(value);
    const values = Object.values(getData);
    const newArr = values.filter((each) => {
      const lowerCase = each.name.toLowerCase();
      const lowerValue = value.toLowerCase();
      return lowerCase.includes(lowerValue);
    });
    setTrItems(newArr);
  };

  useEffect(() => {
    if (getData) {
      const values = Object.values(getData);
      setTrItems(values);
    }
  }, [getData]);

  return !loading ? <Loading /> : (
    <div>
      <InputFilter
        textHandleChange={ textHandleChange }
        textFilter={ textFilter }
      />
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
          {trHtml.map((i) => (
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
