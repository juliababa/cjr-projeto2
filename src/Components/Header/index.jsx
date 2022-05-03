import React from 'react';
import RightMenu from './RightMenu';
import './styles.css'

export default function Header() {
  return (
    <header>    
      <div className='menu'>
        <h3>dinnerdash</h3>
        <RightMenu/>
      </div>
      <div>
        <h1>Backoffice</h1>
        <p>Gerencie pedidos, refeições e mais</p>
      </div>
    </header>
  )
}
