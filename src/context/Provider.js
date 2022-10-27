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
