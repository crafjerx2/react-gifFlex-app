import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setinputValue] = useState('');

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onNewInput = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onAddCategory(inputValue.trim());
    setinputValue('');
  };

  return (
    <form onSubmit={onNewInput} aria-label='form'>
      <input
        type='text'
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired
};
