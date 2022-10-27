/* import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/starWarsApi';

export const planetsContext = createContext();

const deleteResidents = (array) => {
  const arr = array.map((i) => {
    delete i.residents;
    return i;
  });
  return arr;
};

function Provider(props) {
  const [DATA, setPlanets] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      const OBJECT_PLANETS = await getPlanets();
      const { results } = OBJECT_PLANETS;
      setPlanets(deleteResidents(results));
    };
    fetchPlanets();
  }, []);

  const { children } = props;
  return (
    <planetsContext.Provider value={ DATA }>
      {children}
    </planetsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
 */

import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  return (
    <MyContext.Provider value="Progress">
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
