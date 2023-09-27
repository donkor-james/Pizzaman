import React, { useState } from 'react';
import MenuData from '../Data/Menu';

const Categories = ({filterItems}) => {
    const handleFilter = (category) => {
        console.log(`Filtering by category: ${category}`);
        filterItems(category)
    }

  return (
    <div className='mt-8'>
        {/* {category === '' ? (
          <button className='border-2 border-red-600 px-7 py-1' onClick={() => handleFilter('')}>All</button>
        ) : (
            null
        )} */}
      {/* <button className='border-2 border-red-600 px-7 py-1' onClick={() => handleFilter('')}>All</button> */}
      <button className='border-2 border-red-600 px-7 py-1 hover:bg-red-700 hover:text-white' onClick={() => handleFilter('pizza')}>Pizza</button>
      <button className='border-2 border-red-600 px-7 py-1 ml-4 hover:bg-red-700 hover:text-white' onClick={() => handleFilter('pasta')}>Pasta</button>
      <button className='border-2 border-red-600 px-7 py-1 ml-4 hover:bg-red-700 hover:text-white' onClick={() => handleFilter('desserts')}>Dessert</button>
      <button className='border-2 border-red-600 px-7 py-1 ml-4 hover:bg-red-700 hover:text-white' onClick={() => handleFilter('salad')}>Salads</button>
    </div>
  );
}

export default Categories;
