import React, { useState } from 'react'
import classnames from 'classnames'

const Technology = () => {
  const [tabActive, settabActive] = useState<boolean>(false)

  return (
    <div className='finaxis-technology-sect'>
      <div className='tech-lft-img'>
        <img
          src='/images/left-corner.png'
          className='img-fluid'
          alt='finaxis'
        />
      </div>
      <div className='finaxis-container'>
        <h2>Technology</h2>
        <div className='finaxis-tab-sect'>
          <ul>
            <li
              className={classnames('finaxistablinks', {
                'tab-active': tabActive == false
              })}
              onClick={() => settabActive(false)}
            >
              Protocols
            </li>
            <li
              className={classnames('finaxistablinks', {
                'tab-active': tabActive == true
              })}
              onClick={() => settabActive(true)}
            >
              Stack
            </li>
          </ul>
        </div>
        {/* <!-- Tab content --> */}
        <div
          id='protocols'
          className={classnames('finaxistabcontent finaxistabcontent-d-block', {
            'd-block': tabActive == false,
            'd-none': tabActive == true
          })}
        >
          <div className='row'>
            <div className='col-lg-6'>
              <div className='finaxis-tabcontent-lft'>
                <h3>Integrated with leading protocols</h3>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='finaxis-tabcontent-right'>
                <ul>
                  <li>
                    <div className='finaxis-tech-imgblock'>
                      <img
                        src='/images/tech-img1.png'
                        className='img-fluid'
                        alt='1inch'
                      />
                    </div>
                    <span>
                      <a href='#' target='_blank'>
                        1inch
                      </a>
                    </span>
                  </li>
                  <li>
                    <div className='finaxis-tech-imgblock'>
                      <img
                        src='/images/tech-img2.png'
                        className='img-fluid'
                        alt='Aave'
                      />
                    </div>
                    <span>
                      <a href='https://aave.com/' target='_blank'>
                        Aave
                      </a>
                    </span>
                  </li>
                  <li>
                    <div className='finaxis-tech-imgblock'>
                      <img
                        src='/images/tech-img3.png'
                        className='img-fluid'
                        alt='Balancer'
                      />
                    </div>
                    <span>
                      <a href='https://balancer.fi/' target='_blank'>
                        Balancer
                      </a>
                    </span>
                  </li>
                  <li>
                    <div className='finaxis-tech-imgblock'>
                      <img
                        src='/images/tech-img4.png'
                        className='img-fluid'
                        alt='Curve'
                      />
                    </div>
                    <span>
                      <a href='https://curve.fi/' target='_blank'>
                        Curve
                      </a>
                    </span>
                  </li>
                  <li>
                    <div className='finaxis-tech-imgblock'>
                      <img
                        src='/images/tech-img5.png'
                        className='img-fluid'
                        alt='Compound'
                      />
                    </div>
                    <span>
                      <a href='https://compound.finance/' target='_blank'>
                        Compound
                      </a>
                    </span>
                  </li>
                  <li>
                    <div className='finaxis-tech-imgblock'>
                      <img
                        src='/images/tech-img6.png'
                        className='img-fluid'
                        alt='1inch'
                      />
                    </div>
                    <span>
                      <a href='#' target='_blank'>
                        1inch
                      </a>
                    </span>
                  </li>
                  <li>
                    <div className='finaxis-tech-imgblock'>
                      <img
                        src='/images/tech-img7.png'
                        className='img-fluid'
                        alt='Matcha'
                      />
                    </div>
                    <span>
                      <a href='#' target='_blank'>
                        Matcha
                      </a>
                    </span>
                  </li>
                  <li>
                    <div className='finaxis-tech-imgblock'>
                      <img
                        src='/images/tech-img8.png'
                        className='img-fluid'
                        alt='Sushi'
                      />
                    </div>
                    <span>
                      <a href='#' target='_blank'>
                        Sushi
                      </a>
                    </span>
                  </li>
                  <li>
                    <div className='finaxis-tech-imgblock'>
                      <img
                        src='/images/tech-img9.png'
                        className='img-fluid'
                        alt='Piedao'
                      />
                    </div>
                    <span>
                      <a href='https://www.piedao.org/' target='_blank'>
                        Piedao
                      </a>
                    </span>
                  </li>
                  <li>
                    <div className='finaxis-tech-imgblock'>
                      <img
                        src='/images/tech-img10.png'
                        className='img-fluid'
                        alt='Synthetix'
                      />
                    </div>
                    <span>
                      <a href='#' target='_blank'>
                        Synthetix
                      </a>
                    </span>
                  </li>
                  <li>
                    <div className='finaxis-tech-imgblock'>
                      <img
                        src='/images/tech-img11.png'
                        className='img-fluid'
                        alt='Uniswap'
                      />
                    </div>
                    <span>
                      <a href='#' target='_blank'>
                        Uniswap
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          id='stack'
          className={classnames('finaxistabcontent finaxistabconten-d-block', {
            'd-block': tabActive == true,
            'd-none': tabActive == false
          })}
        >
          <div className='row'>
            <div className='col-lg-6'>
              <div className='finaxis-tabcontent-lft'>
                <h3>Some text will come now</h3>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='finaxis-tabcontent-right'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
