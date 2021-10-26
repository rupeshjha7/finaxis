import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='finaxis-container'>
        <div className='finaxis-footer-block'>
          <div className='finaxis-footer-block-lft'>
            <ul>
              <li>
                <a href='#'>docs</a>
              </li>
              <li>
                <a href='#'>help</a>
              </li>
              <li>
                <a href='#'> privacy</a>
              </li>
              <li>
                <a href='#'>terms</a>
              </li>
            </ul>
          </div>
          <div className='finaxis-footer-block-right'>
            <div>
              <ul className='finaxis-social-block'>
                <li>
                  <a href='#'>
                    <img
                      src='/images/media-icon1.png'
                      className='img-fluid'
                      alt='icon'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src='/images/media-icon2.png'
                      className='img-fluid'
                      alt='icon'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src='/images/media-icon3.png'
                      className='img-fluid'
                      alt='icon'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src='/images/media-icon4.png'
                      className='img-fluid'
                      alt='icon'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src='/images/media-icon5.png'
                      className='img-fluid'
                      alt='icon'
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src='/images/media-icon6.png'
                      className='img-fluid'
                      alt='icon'
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className='finaxis-cookie-privacy-block'>
              <ul>
                <li>
                  <a href='#'>Legal Disclaimer </a>
                </li>
                <li>
                  <a href='#'>Cookies & Privacy Policy</a>
                </li>
                <li>
                  <a href='#'>Copyright Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
