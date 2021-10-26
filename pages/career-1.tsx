import React, { useState } from 'react'
import Otherheader from '../Component/other-header'
import Footer from '../Component/footer'
import classnames from 'classnames'
import Link from 'next/link'
const Career1 = () => {
  return (
    <>
      <div className='finaxis-blue-bg'>
        <Otherheader />
        <div className='finaxis-career-sect'>
          <div className='finaxis-container'>
            <div className='finaxis-career2-block'>
              {' '}
              <div className='finaxis-career-hd2'>
                <h2>
                  Administrative Business Partner to <br />
                  CBO / Business Development & Partnerships
                </h2>
                <p>
                  Full-time | Flow | Remote (PST time zone) | Business
                  Operations
                </p>
              </div>
              <div className='finaxis-career-hd-txt'>
                <h3>A little about us:</h3>
                <p className='mb-0'>
                  Dapper team members are humble and curious entrepreneurs,
                  builders, and tinkerers who share a passion to demystify
                  blockchain technology and tap its potential to create change
                  in the world. Our people are our greatest strength: our
                  diverse crew flourishes in a distributed hierarchy where
                  personal autonomy and professional growth are encouraged. We
                  value our culture above else: regardless of where you came
                  from, what you studied, or who you used to work for, your role
                  here will necessitate both a high level of creativity and
                  strategic thinking on complex issues. Everyone here is a
                  founder, and no one fits in a box. We’re all driven by an
                  insatiable thirst for learning and development, and that’s
                  what brings us together.
                </p>
              </div>
              <div className='finaxis-career-mid-content'>
                <div>
                  <h3>What we’ll accomplish together:</h3>
                  <ul>
                    <li>
                      Be responsible for taking a Tier 1-2 Flow developer from
                      the Partnerships team and manage them end-to-end: from
                      building to launch to post-launch.
                    </li>
                    <li>
                      Work with the Director of Partner Management on a
                      strategic plan and process for partner management
                    </li>
                    <li>
                      Build and maintain strong relationships with those
                      partners to drive success and satisfaction.
                    </li>
                    <li>
                      Work closely with Partnership leads, Product and
                      Engineering teams to scope new projects, document
                      requirements, and ongoing feature improvements
                    </li>
                    <li>
                      Serve as the partner advocate within FinAxis,
                      disseminating relevant information to internal
                      stakeholders as needed.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>A little about you:</h3>
                  <ul>
                    <li>
                      You are capable of applying your skills across a variety
                      of use cases; inflexible specialists need not apply.
                    </li>
                    <li>
                      We believe in processes and the power of planning, but you
                      will often have to roll with the punches and prioritize
                      the most impactful tasks on the fly.
                    </li>
                    <li>
                      4-5 years in a customer facing role, either in partner
                      management or business development.
                    </li>
                    <li>
                      Proven success working in complex, technical environments.
                    </li>
                    <li>Self-starter with an entrepreneurial spirit.</li>
                    <li>Blockchain experience a huge plus.</li>
                  </ul>
                </div>
              </div>
              <div className='finaxis-career-hd-txt'>
                <h3>More about FinAxis:</h3>
                <p>
                  FinAxis is the world's first blockchain entertainment company.
                  We are the creators of industry-leading experiences including
                  CryptoKitties and NBA Top Shot, as well as Dapper Wallet, the
                  simplest way to manage your assets and use the blockchain. We
                  are also the original developers behind Flow, a new
                  decentralized blockchain designed from the ground up for
                  scalability and ease of use.
                </p>
                <p>
                  Our mission at FinAxis is to make the world a more open,
                  empowering, and enjoyable place through consumer adoption of
                  decentralized technologies. We have raised over $300M from
                  leading VCs including Fred Wilson (USV) and Chris Dixon as
                  well as Venrock, Samsung, Google Ventures, Coatue, NBA
                  players, and global artists, among others. FinAxis partners
                  include the NBA and NBPA, the NFL-PA, Ubisoft, Warner Music,
                  Turner, Dr. Seuss, Genies, and the UFC, as well as 100+
                  others.
                </p>
                <p>
                  Visit our website to learn even more about FinAxis, including
                  information about benefits and perks.
                </p>
              </div>
              <Link href='/career-apply'><div className='d-flex'>
                <a href='#' className='btn finaxis-caree-apply-btn'>
                  Apply Now
                </a>
              </div></Link>
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

export default Career1
