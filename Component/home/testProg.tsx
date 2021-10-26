import React from 'react'

const TestProg = () => {
  return (
    <div className='finaxis-testProg-sect'>
      <div className='finaxis-container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='finaxis-testProg-lft'>
              <h2>Beta test program</h2>
              <p>
                Help us shape our newest blockchain apps and get access to
                exclusive content before anyone else.
              </p>
              <div className='finaxis-testProg-form'>
                <form>
                  <div className='finaxis-form-inputgroup'>
                    <input type='text' placeholder='Enter your mail id' />
                    <button type='submit' className='finaxis-submit-bttn'>
                      Explore Finaxis
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='finaxis-testProg-right'>
              <img
                src='/images/finaxis-img8.png'
                className='img-fluid'
                alt='test programm'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestProg
