import React from 'react'

const CmpnyLogo = () => {
  return (
    <div className='finaxis-cmpnyLogo-sect'>
      <div className='finaxis-container'>
        <div className='finaxis-cmpnyLogo-block'>
          <ul>
            <li>
              <img src='/images/c-logo1.png' className='img-fluid' alt='okex' />
            </li>
            <li>
              <img
                src='/images/c-logo2.png'
                className='img-fluid'
                alt='binance'
              />
            </li>
            <li>
              <img
                src='/images/c-logo3.png'
                className='img-fluid'
                alt='ripple'
              />
            </li>
            <li>
              <img
                src='/images/c-logo4.png'
                className='img-fluid'
                alt='chainlink'
              />
            </li>
            <li>
              <img
                src='/images/c-logo5.png'
                className='img-fluid'
                alt='gitlab'
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CmpnyLogo
