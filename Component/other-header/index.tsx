import React, { useState } from 'react'
import Menu from '../menu'

const Otherheader = () => {
  return (
    <div className='position-relative'>
      <header className='finaxis-container'>
        <div className='finaxis-menu-block'>
          <div className='finaxis-logo'>
            <a href='#'>
              <img
                src='/images/FinaxisLogo.png'
                alt='logo'
                className='img-fluid'
              />
            </a>
            <span>Beta</span>
          </div>
          <div className='finaxis-home-logo'>
            <a href='/'>
              <img src='/images/Home.png' className='img-fluid' alt='home' />
            </a>
          </div>
          <nav className='navbar finaxis-navbar'>
            <div className='navbar-btn-block'>
              <div className='navbar-header'>
                <button
                  type='button'
                  className='navbar-toggle collapsed'
                  data-toggle='collapse'
                  data-target='#finNavbar'
                >
                  <img
                    src='/images/menu-btn.png'
                    alt='menu'
                    className='img-fluid toggle-bttn1'
                  />
                  <img
                    src='/images/Cross.png'
                    alt='menu'
                    className='img-fluid toggle-bttn2'
                  />
                </button>
              </div>
              <Menu />
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Otherheader

