import React, { useState } from 'react'

const Menu = () => {
  return (
    <div className='collapse navbar-collapse' id='finNavbar'>
      <ul className='nav navbar-nav'>
        <li className='nav-item'>
          <a href='#'>Mission</a>
        </li>
        <li className='nav-item'>
          <a href='#'>Technology</a>
        </li>
        <li className='dropdown-toggle'>
          <a
            className='nav-link'
            href='#'
            id='navbarDropdownMenuLink'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            Products{' '}
            <span className='ml-32'>
              <img
                src='/images/submenu-icon.png'
                alt='submenu'
                className='img-fluid ml-2'
              />
            </span>
          </a>
          <ul className='submenu dropdown-menu'>
            <li>
              <a className='dropdown-item' href='#'>
                Enoch
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                No2
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Lusarn
              </a>
            </li>
          </ul>
        </li>

        <li className='nav-item'>
          <a href='/news'>News</a>
          {/* <span className='comming-cls'>Coming Soon</span> */}
        </li>
        <li className='nav-item'>
          <a href='/career'>Career</a>
          {/* <span className='comming-cls'>Coming Soon</span> */}
        </li>
        <li className='nav-item'>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
