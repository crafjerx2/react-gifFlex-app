import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifFlexApp = () => {
  const [categories, setcategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setcategories([newCategory, ...categories]);
  };

  const onDelete = (category) => {
    const updateCategories = categories.filter(cat => cat !== category);
    setcategories(updateCategories);
  };

  return (
    <main className='container'>
      <h1>GifFlexApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {
        categories.map(category => (
          <GifGrid key={category} category={category} onDelete={onDelete} />
        ))
      }
    </main>
  );
};
