import React, { useState } from 'react'
import Menu from '../menu'

const Header = () => {
  return (
    <div className='position-relative'>
      <header className='finaxis-banner-main finaxis-container'>
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
        <div className='finaxis-header-body'>
          <div className='finaxis-header-lft'>
            <h2>The serious business of fun & games on the blockchain </h2>
            <p>
              No jargon or nonsense. Just <span>good fun.</span>
            </p>
            <div>
              <a href='#' className='btn finexplore-btn'>
                Explore Finaxis
              </a>
            </div>
          </div>
          <div className='finaxis-header-right'>
            <img
              src='/images/finaxis-img1.png'
              className='img-fluid'
              alt='finaxis'
            />
          </div>
        </div>
      </header>
      <div className='finaxis-social-link-block' id='theFixed'>
        <ul>
          <li>
            <a href='#'>
              <img
                src='/images/twitter-white.png'
                alt='twitter'
                className='img-fluid fin-ico1'
              />
              <img
                src='/images/twitter-red.png'
                alt='twitter'
                className='img-fluid fin-ico2'
              />
            </a>
          </li>
          <li>
            <a href='#'>
              <img
                src='/images/be-white.png'
                alt='be'
                className='img-fluid fin-ico1'
              />
              <img
                src='/images/be-red.png'
                alt='be'
                className='img-fluid fin-ico2'
              />
            </a>
          </li>
          <li>
            <a href='#'>
              <img
                src='/images/facebook-white.png'
                alt='facebook'
                className='img-fluid fin-ico1'
              />
              <img
                src='/images/facebook-red.png'
                alt='facebook'
                className='img-fluid fin-ico2'
              />
            </a>
          </li>
          <li>
            <a href='#'>
              <img
                src='/images/linkedin-white.png'
                alt='linkedin'
                className='img-fluid fin-ico1'
              />
              <img
                src='/images/linkedin-red.png'
                alt='linkedin'
                className='img-fluid fin-ico2'
              />
            </a>
          </li>
          <li>
            <a href='#'>
              <img
                src='/images/Dribbble-white.png'
                alt='Dribbble'
                className='img-fluid fin-ico1'
              />
              <img
                src='/images/Dribbble-red.png'
                alt='Dribbble'
                className='img-fluid fin-ico2'
              />
            </a>
          </li>
        </ul>
      </div>
      <div className='finaxis-header-next'>
        <div className='finaxis-top-right-img'>
          <img
            src='/images/finaxis-img3.png'
            className='img-fluid'
            alt='finaxis'
          />
        </div>
        <div className='finaxis-header-innerbody'>
          <div className='finaxis-top-img'>
            <img
              src='/images/FinLogo.png'
              className='img-fluid'
              alt='finaxis logo'
            />
          </div>
          <div className='finaxis-header-innerbody-block1'>
            <h3>Mission</h3>
            <h4>Blockchain is for you!</h4>
            <p className='mb-4'>
              Blockchain is the biggest thing to happen to the internet since
              the iPhone. It will reshape how we use and interact with digital
              worlds.
            </p>

            <p>
              But for this technology to realize its real-world potential, it
              needs to, y’know, be used. By people. Real people, in the real
              world—not just industry insiders and early adopters.
            </p>
          </div>
          <div>
            <img src='/images/mission-bg1.png' className='img-fluid' />
          </div>
        </div>
        <div className='finaxis-header-innerbody-bttm'>
          <img
            src='/images/finaxis-img2.png'
            className='img-fluid'
            alt='finaxis'
          />
        </div>
      </div>
    </div>
  )
}

export default Header
