import React from 'react'
import { useState } from 'react';
import { MenuList } from '../helper/MenuList'

function Menu() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuItemClick = (index) => {
    if (selectedMenuItem === index) {
      setSelectedMenuItem(null);
    } else {
      setSelectedMenuItem(index);
    }
  };
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className="menuList">
            {MenuList.map((menuItem,key)=>{
                return <div className={`menuItem ${selectedMenuItem === key ? "selected" : ""}`} onClick={() => handleMenuItemClick(key)}>
                    <div><img src={menuItem.image}  /></div>
                    <h3>{menuItem.name}</h3>
                    <p>{menuItem.price} ₺</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Menu