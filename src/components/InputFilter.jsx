import React from 'react';
import PropTypes from 'prop-types';

export default function InputFilter({ textHandleChange, textFilter }) {
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Name"
        onChange={ textHandleChange }
        value={ textFilter }
      />
    </div>
  );
}

InputFilter.propTypes = {
  textHandleChange: PropTypes.func.isRequired,
  textFilter: PropTypes.string.isRequired,
};
