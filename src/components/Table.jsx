import React, { useState, useEffect } from 'react';
import Header from './Header';
import getPlanets from '../services/starWarsApi';

function Table() {
  const [planetStarWars, setPlanets] = useState('0');

  useEffect(() => {
    const fetchPlanets = async () => {
      const OBJECT_PLANETS = await getPlanets();
      const { results } = OBJECT_PLANETS;
      setPlanets(results);
    };
    fetchPlanets();
  }, []);

  return (
    <div>
      <Header />
      <h2>Tabela</h2>
      <table>
        <tr>
          <ht>Name</ht>
          <ht>Rotation Period</ht>
          <ht>Orbital Period</ht>
          <ht>Diameter</ht>
        </tr>
        {
          planetStarWars.map((i) => (
            <tr key={ i.name }>
              <td>{i.name}</td>
              <td>{i.rotation_period}</td>
              <td>{i.orbital_period}</td>
              <td>{i.diameter}</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}

export default Table;
