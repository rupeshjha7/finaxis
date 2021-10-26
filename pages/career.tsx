import React, { useState } from 'react'
import Otherheader from '../Component/other-header'
import Footer from '../Component/footer'
import Link from 'next/link'

const Career = () => {
  return (
    <>
      <div className='finaxis-blue-bg'>
        <Otherheader />
        <div className='finaxis-career-sect'>
          <div className='finaxis-container'>
            <div className='finaxis-career-head'>
              <h2>Career</h2>
              <p>
                At FinAxis, our people are our greatest strength. We’re proud to
                have a diverse team of creators and founders who flourish in an
                environment of personal autonomy, where professional growth is
                encouraged. We value our culture and diversity above all else,
                regardless of where you came from, what you studied, or who you
                used to work for. Titles and years of experience don't matter to
                us – impact, authenticity, and values alignment do. We're a
                remote-first organization, with most of the team working in
                Pacific Time.
              </p>
            </div>
            <div className='finaxis-career-gallry'>
              <div className='finaxis-career-gallry-lft'>
                <div className='finaxis-career-gal-block'>
                  <div className='finaxis-career-gal-single'>
                    <img
                      src='/images/career-img1.png'
                      className='img-fluid'
                      alt='career'
                    />
                  </div>
                  <div className='finaxis-career-gal-double'>
                    <ul>
                      <li className='mb-24'>
                        <img
                          src='/images/career-img2.png'
                          className='img-fluid'
                          alt='career'
                        />
                      </li>
                      <li>
                        <img
                          src='/images/career-img3.png'
                          className='img-fluid'
                          alt='career'
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='finaxis-career-gallry-right'>
                <div className='finaxis-career-gal-block'>
                  <div className='finaxis-career-gal-single ml-24'>
                    <img
                      src='/images/career-img4.png'
                      className='img-fluid'
                      alt='career'
                    />
                  </div>
                  <div className='finaxis-career-gal-double'>
                    <ul>
                      <li className='mb-24'>
                        <img
                          src='/images/career-img5.png'
                          className='img-fluid'
                          alt='career'
                        />
                      </li>
                      <li>
                        <img
                          src='/images/career-img6.png'
                          className='img-fluid'
                          alt='career'
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='finaxis-career-popular-job'>
              <div className=''>
                <div className='finaxis-career-popular-job-block'>
                  <h3>Popular Jobs</h3>
                  <div>
                    <div className='accordion' id='accordionJobs'>
                      <div className='accordion-item'>
                        <div
                          className='finaxis-item-head collapsed'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapseOne'
                          aria-expanded='true'
                          aria-controls='collapseOne'
                        >
                          <span>Business Operations</span>{' '}
                          <span className='fin-blue-clr'>view 5 positions</span>
                        </div>

                        <div
                          id='collapseOne'
                          className='collapse finaxis-collapse-block'
                          aria-labelledby='headingOne'
                          data-bs-parent='#accordionJobs'
                        >
                          <div className='finaxis-collapse-body'>
                            <ul>
                              <Link href='/career-1'>
                                <li className='cursor'>
                                  <div className='finaxis-collapse-lft'>
                                    Administrative Business Partner to CBO /
                                    Business Development & Partnerships
                                  </div>
                                  <div className='finaxis-collapse-right'>
                                    2 Postion
                                  </div>
                                </li>
                              </Link>
                              <li>
                                <div className='finaxis-collapse-lft'>
                                  Developer Relations Manager
                                </div>
                                <div className='finaxis-collapse-right'>
                                  2 Postion
                                </div>
                              </li>
                              <li>
                                <div className='finaxis-collapse-lft'>
                                  Director UFC (Partnerships)
                                </div>
                                <div className='finaxis-collapse-right'>
                                  1 Postion
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <div
                          className='finaxis-item-head collapsed'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapse2'
                          aria-expanded='true'
                          aria-controls='collapseOne'
                        >
                          <span>Data</span>{' '}
                          <span className='fin-blue-clr'>view 5 positions</span>
                        </div>

                        <div
                          id='collapse2'
                          className='collapse finaxis-collapse-block'
                          aria-labelledby='headingOne'
                          data-bs-parent='#accordionJobs'
                        >
                          <div className='finaxis-collapse-body'>
                            <ul>
                              <li>
                                <div className='finaxis-collapse-lft'></div>
                                <div className='finaxis-collapse-right'></div>
                              </li>
                              <li>
                                <div className='finaxis-collapse-lft'></div>
                                <div className='finaxis-collapse-right'></div>
                              </li>
                              <li>
                                <div className='finaxis-collapse-lft'></div>
                                <div className='finaxis-collapse-right'></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <div
                          className='finaxis-item-head collapsed'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapse3'
                          aria-expanded='true'
                          aria-controls='collapseOne'
                        >
                          <span>Design & Creative</span>{' '}
                          <span className='fin-blue-clr'>view 5 positions</span>
                        </div>

                        <div
                          id='collapse3'
                          className='collapse finaxis-collapse-block'
                          aria-labelledby='headingOne'
                          data-bs-parent='#accordionJobs'
                        >
                          <div className='finaxis-collapse-body'>
                            <ul>
                              <li>
                                <div className='finaxis-collapse-lft'></div>
                                <div className='finaxis-collapse-right'></div>
                              </li>
                              <li>
                                <div className='finaxis-collapse-lft'></div>
                                <div className='finaxis-collapse-right'></div>
                              </li>
                              <li>
                                <div className='finaxis-collapse-lft'></div>
                                <div className='finaxis-collapse-right'></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <div
                          className='finaxis-item-head collapsed'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapse4'
                          aria-expanded='true'
                          aria-controls='collapseOne'
                        >
                          <span>Marketing</span>{' '}
                          <span className='fin-blue-clr'>view 5 positions</span>
                        </div>

                        <div
                          id='collapse4'
                          className='collapse finaxis-collapse-block'
                          aria-labelledby='headingOne'
                          data-bs-parent='#accordionJobs'
                        >
                          <div className='finaxis-collapse-body'>
                            <ul>
                              <li>
                                <div className='finaxis-collapse-lft'></div>
                                <div className='finaxis-collapse-right'></div>
                              </li>
                              <li>
                                <div className='finaxis-collapse-lft'></div>
                                <div className='finaxis-collapse-right'></div>
                              </li>
                              <li>
                                <div className='finaxis-collapse-lft'></div>
                                <div className='finaxis-collapse-right'></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <div
                          className='finaxis-item-head collapsed'
                          data-bs-toggle='collapse'
                          data-bs-target='#collapse5'
                          aria-expanded='true'
                          aria-controls='collapseOne'
                        >
                          <span>Blockchain</span>{' '}
                          <span className='fin-blue-clr'>view 5 positions</span>
                        </div>

                        <div
                          id='collapse5'
                          className='collapse finaxis-collapse-block'
                          aria-labelledby='headingOne'
                          data-bs-parent='#accordionJobs'
                        >
                          <div className='finaxis-collapse-body'>
                            <ul>
                              <li>
                                <div className='finaxis-collapse-lft'></div>
                                <div className='finaxis-collapse-right'></div>
                              </li>
                              <li>
                                <div className='finaxis-collapse-lft'></div>
                                <div className='finaxis-collapse-right'></div>
                              </li>
                              <li>
                                <div className='finaxis-collapse-lft'></div>
                                <div className='finaxis-collapse-right'></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='finaxis-career-joinUs'>
              <div className=''>
                <h2>Why to join us?</h2>
                <div className='row'>
                  <div className='col-xl-4 col-lg-6'>
                    <div className='finaxis-joinUs-block'>
                      <h3>Fast growing compnay</h3>
                      <p>
                        We create products for real people. If something doesn’t
                        matter to you, it doesn't matter to us.
                      </p>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-6'>
                    <div className='finaxis-joinUs-block'>
                      <h3>Great Colleaguea</h3>
                      <p>
                        We create products for real people. If something doesn’t
                        matter to you, it doesn't matter to us.
                      </p>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-6'>
                    <div className='finaxis-joinUs-block'>
                      <h3>Take Charges</h3>
                      <p>
                        We create products for real people. If something doesn’t
                        matter to you, it doesn't matter to us.
                      </p>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-6'>
                    <div className='finaxis-joinUs-block'>
                      <h3>Professional Development</h3>
                      <p>
                        We create products for real people. If something doesn’t
                        matter to you, it doesn't matter to us.
                      </p>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-6'>
                    <div className='finaxis-joinUs-block'>
                      <h3>Leadership Opportunities</h3>
                      <p>
                        We create products for real people. If something doesn’t
                        matter to you, it doesn't matter to us.
                      </p>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-6'>
                    <div className='finaxis-joinUs-block'>
                      <h3>Fitness Reimbursements</h3>
                      <p>
                        We create products for real people. If something doesn’t
                        matter to you, it doesn't matter to us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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

export default Career
