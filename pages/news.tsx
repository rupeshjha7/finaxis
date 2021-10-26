import React, { useState } from 'react'
import Otherheader from '../Component/other-header'
import Footer from '../Component/footer'
import classnames from 'classnames'

const News = () => {
  return (
    <>
      <div className='finaxis-blue-bg'>
        <Otherheader />

        <div className='finaxis-news-sect'>
          <div className='finaxis-container cust-z-index'>
            <div className='row'>
              <div className='col-xl-7 col-lg-6'>
                <div className='news-head-lft'>
                  <img
                    src='/images/news-img1.png'
                    className='img-fluid'
                    alt='news'
                  />
                </div>
              </div>
              <div className='col-xl-5 col-lg-6'>
                <div className='news-head-right'>
                  <h2>July 12, 2021</h2>
                  <p className='news-head-txt1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <p className='news-head-txt2'>
                    FinAxis team members are humble and curious entrepreneurs,
                    builders, and tinkerers who share a passion to demystify
                    blockchain technology and tap its potential to create change
                    in the world. Our people are our greatest strength: our
                    diverse crew flourishes in a distributed hierarchy where
                    personal autonomy{' '}
                  </p>
                  <p>
                    <a href='#' className='news-head-linkBtn'>
                      news-head
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='news-posts-block'>
              <ul>
                <li>
                  <div className='news-block-panel'>
                    <div className='news-block-panel-img'>
                      <img
                        src='/images/news-img2.png'
                        className='img-fluid'
                        alt='news'
                      />
                    </div>
                    <div className='news-content-block'>
                      <h3>July 12, 2021</h3>
                      <p className='news-content-txt1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
                      </p>
                      <p className='news-content-txt2'>
                        FinAxis team members are humble and curious
                        entrepreneurs, builders, and tinkerers who share a
                        passion
                      </p>
                      <p>
                        <a href='#' className='news-head-linkBtn'>
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='news-block-panel'>
                    <div className='news-block-panel-img'>
                      <img
                        src='/images/news-img3.png'
                        className='img-fluid'
                        alt='news'
                      />
                    </div>
                    <div className='news-content-block'>
                      <h3>July 12, 2021</h3>
                      <p className='news-content-txt1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
                      </p>
                      <p className='news-content-txt2'>
                        FinAxis team members are humble and curious
                        entrepreneurs, builders, and tinkerers who share a
                        passion
                      </p>
                      <p>
                        <a href='#' className='news-head-linkBtn'>
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='news-block-panel'>
                    <div className='news-block-panel-img'>
                      <img
                        src='/images/news-img4.png'
                        className='img-fluid'
                        alt='news'
                      />
                    </div>
                    <div className='news-content-block'>
                      <h3>July 12, 2021</h3>
                      <p className='news-content-txt1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
                      </p>
                      <p className='news-content-txt2'>
                        FinAxis team members are humble and curious
                        entrepreneurs, builders, and tinkerers who share a
                        passion
                      </p>
                      <p>
                        <a href='#' className='news-head-linkBtn'>
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='news-block-panel'>
                    <div className='news-block-panel-img'>
                      <img
                        src='/images/news-img5.png'
                        className='img-fluid'
                        alt='news'
                      />
                    </div>
                    <div className='news-content-block'>
                      <h3>July 12, 2021</h3>
                      <p className='news-content-txt1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
                      </p>
                      <p className='news-content-txt2'>
                        FinAxis team members are humble and curious
                        entrepreneurs, builders, and tinkerers who share a
                        passion
                      </p>
                      <p>
                        <a href='#' className='news-head-linkBtn'>
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='news-block-panel'>
                    <div className='news-block-panel-img'>
                      <img
                        src='/images/news-img6.png'
                        className='img-fluid'
                        alt='news'
                      />
                    </div>
                    <div className='news-content-block'>
                      <h3>July 12, 2021</h3>
                      <p className='news-content-txt1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
                      </p>
                      <p className='news-content-txt2'>
                        FinAxis team members are humble and curious
                        entrepreneurs, builders, and tinkerers who share a
                        passion
                      </p>
                      <p>
                        <a href='#' className='news-head-linkBtn'>
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='news-block-panel'>
                    <div className='news-block-panel-img'>
                      <img
                        src='/images/news-img7.png'
                        className='img-fluid'
                        alt='news'
                      />
                    </div>
                    <div className='news-content-block'>
                      <h3>July 12, 2021</h3>
                      <p className='news-content-txt1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
                      </p>
                      <p className='news-content-txt2'>
                        FinAxis team members are humble and curious
                        entrepreneurs, builders, and tinkerers who share a
                        passion
                      </p>
                      <p>
                        <a href='#' className='news-head-linkBtn'>
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='news-block-panel'>
                    <div className='news-block-panel-img'>
                      <img
                        src='/images/news-img8.png'
                        className='img-fluid'
                        alt='news'
                      />
                    </div>
                    <div className='news-content-block'>
                      <h3>July 12, 2021</h3>
                      <p className='news-content-txt1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
                      </p>
                      <p className='news-content-txt2'>
                        FinAxis team members are humble and curious
                        entrepreneurs, builders, and tinkerers who share a
                        passion
                      </p>
                      <p>
                        <a href='#' className='news-head-linkBtn'>
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='news-block-panel'>
                    <div className='news-block-panel-img'>
                      <img
                        src='/images/news-img9.png'
                        className='img-fluid'
                        alt='news'
                      />
                    </div>
                    <div className='news-content-block'>
                      <h3>July 12, 2021</h3>
                      <p className='news-content-txt1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
                      </p>
                      <p className='news-content-txt2'>
                        FinAxis team members are humble and curious
                        entrepreneurs, builders, and tinkerers who share a
                        passion
                      </p>
                      <p>
                        <a href='#' className='news-head-linkBtn'>
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='news-block-panel'>
                    <div className='news-block-panel-img'>
                      <img
                        src='/images/news-img10.png'
                        className='img-fluid'
                        alt='news'
                      />
                    </div>
                    <div className='news-content-block'>
                      <h3>July 12, 2021</h3>
                      <p className='news-content-txt1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing{' '}
                      </p>
                      <p className='news-content-txt2'>
                        FinAxis team members are humble and curious
                        entrepreneurs, builders, and tinkerers who share a
                        passion
                      </p>
                      <p>
                        <a href='#' className='news-head-linkBtn'>
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='finaxis-career-btm-bg'>
            <img
              src='/images/bg-blur-img.png'
              className='img-fluid'
              alt='contact'
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default News
