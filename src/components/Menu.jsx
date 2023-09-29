import React, { useState } from 'react';
import Categories from './Categories';
import MenuData from '../Data/Menu';

const Menu = () => {
  const [MenuItems, setMenuItems] = useState(MenuData)
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if(category === '') {
      setMenuItems(MenuData);
    }else {
      const newItems = MenuItems.filter((item) => item.category === category)
      setMenuItems(newItems);
    }
    const newItems = MenuData.filter((item) => item.category === category)
    setMenuItems(newItems);
  }
  return (
    <div className='flex flex-col justify-center items-center pt-20'>
      <h4 className='font-custom font-bold text-6xl'>Our Menu</h4>
      <Categories filterItems={filterItems}/>
      <div className=''></div>
      <div className='grid grid-cols-2 px-16 py-16 gap-y-6 gap-x-5'>
        {MenuItems.map((menuItem) => {
          const {id, title, image, price, desc} = menuItem;
          return <article key={id} className='flex flex-row'>
            <img src={image} alt={title} />
            <div className='pl-4'>
              <header className='flex flex-row justify-between'>
                <h4 className='text-xl'>{title}</h4>
                <h4 className='text-red-600 font-bold'>${price}</h4>
              </header>
              <p className='py-4 text-gray-800'>{desc}</p>
            </div>


          </article>
        })}

      </div>
      <button className="px-6 py-3 mt-5 bg-red-700 text-white rounded hover:bg-red-600 font-bold border-b-4 border-solid border-green-600">SEE TODAY'S MENU</button>
      
    </div>
  );
}

export default Menu;
