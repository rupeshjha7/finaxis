import React from 'react'

const OurApproch = () => {
  return (
    <div className='finaxis-ourapproch-sect'>
      <div className='finaxis-container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='finaxis-ourapproch-lft'>
              <h3>Our approach</h3>
              <ul>
                <li>
                  <h4>Built for you</h4>
                  <p>
                    We create products for real people. If something doesn’t
                    matter to you, it doesn't matter to us.
                  </p>
                </li>
                <li>
                  <h4>Product before promises</h4>
                  <p>
                    Instead of talking about what may be possible, we let you
                    experience it for yourself.Value without compromise
                  </p>
                </li>
                <li className='mb-0'>
                  <h4>Value without compromise</h4>
                  <p>
                    Anything of value to you is decentralized. Everything else
                    is fast and easy.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='finaxis-ourapproch-right'>
              <img
                src='/images/finaxis-img4.png'
                className='img-fluid'
                alt='our approach'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurApproch
