import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Otherheader from '../Component/other-header'
import Footer from '../Component/footer'
import { Formik, FormikErrors } from 'formik'
import * as Yup from 'yup'
import classnames from 'classnames'
interface MyFormValues {
  email: string

  fname: string
  lname: string
  job: string
  check: string
  company: string
  phone: string
}
const contact = () => {
  const [date, setDate] = useState(new Date())
  const [selectedTag, setSelectedTag] = useState<string>('')
  const [selectedTag1, setSelectedTag1] = useState<string>('')
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  const [show, setshow] = useState(false)
  const [showCountry, setshowCountry] = useState(false)

  const [filter, setFilter] = useState([
    {
      label: 'Crypto Service',
      selected: false
    },
    {
      label: 'Crypto ',
      selected: false
    }
  ])
  const [filters, setFilters] = useState([
    {
      label: 'London, Uinted Kingdom',
      selected: false
    },
    {
      label: 'London',
      selected: false
    }
  ])
  const initialValues: MyFormValues = {
    email: '',
    phone: '',
    fname: '',
    lname: '',
    job: '',
    check: '',
    company: ''
  }
  const recaptchaRef = React.createRef()
  return (
    <>
      <div className='finaxis-blue-bg'>
        <Otherheader />
        <div className='finaxis-contact-sect'>
          <div className='finaxis-container'>
            <div className='row flex-row-reverse'>
              <div className='col-xl-6 col-lg-12'>
                <div className='finaxis-contact-block-right'>
                  <h3>Get in touch</h3>
                  <p>Have an enquiry or some feedback for us?</p>
                  <p>Fill out the form below to contact our team.</p>
                  <div className='finaxis-form-block'>
                    <Formik
                      initialValues={initialValues}
                      onSubmit={(values: MyFormValues, setSubmitting: any) => {
                        console.log('Enter in submit function', values)
                        // setTimeout(() => {
                        //   alert(JSON.stringify(values, null, 2))
                        //   setSubmitting(false)
                        // }, 500)
                      }}
                      // validator={() => ({})}

                      validate={(values: MyFormValues) => {
                        // type Error = {
                        //   email: string
                        // }
                        // var errors = {} as Error
                        let errors: FormikErrors<MyFormValues> = {}

                        if (!values.email) {
                          errors.email = 'Please enter your mail id'
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                            values.email
                          )
                        ) {
                          errors.email = 'Invalid email address'
                        }
                        // else if (
                        //   !/^[A-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!gmx.co.in)[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        //     errors.email
                        //   )
                        // ) {
                        //   errors.email = 'Invalid email address'
                        // }
                        return errors
                      }}
                      validationSchema={Yup.object().shape({
                        job: Yup.string()
                          .min(2, 'Too Short!')
                          .max(500, 'Too Long!')
                          .required('Please enter job title'),
                        fname: Yup.string()
                          .min(2, 'Too Short!')
                          .max(500, 'Too Long!')
                          .required('Please enter first name'),
                        lname: Yup.string()
                          .min(2, 'Too Short!')
                          .max(500, 'Too Long!')
                          .required('Please enter last name'),
                        phone: Yup.string()
                          .min(2, 'Too Short!')
                          .max(500, 'Too Long!')
                          .required('Please enter phone number'),
                        company: Yup.string()
                          .min(2, 'Too Short!')
                          .max(500, 'Too Long!')
                          .required('Please enter company name')
                      })}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        setFieldValue,
                        resetForm
                      }: /* and other goodies */
                      any) => (
                        <form onSubmit={handleSubmit}>
                          <div className='row'>
                            <div className='col-md-6'>
                              <div className='finaxis-input-label'>
                                First name<span>*</span>
                              </div>
                              <div className='finaxis-form-input'>
                                <input
                                  type='text'
                                  placeholder='First name'
                                  name='fname'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.fname}
                                />
                                <div className='error-msg'>{errors.fname}</div>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='finaxis-input-label'>
                                Last name<span>*</span>
                              </div>
                              <div className='finaxis-form-input'>
                                <input
                                  type='text'
                                  id='inputpassword1'
                                  placeholder='Last name'
                                  name='lname'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.lname}
                                />
                                <div className='error-msg'>{errors.lname}</div>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='finaxis-input-label'>
                                Email address<span>*</span>
                              </div>
                              <div className='finaxis-form-input'>
                                <input
                                  type='email'
                                  id='inputpassword1'
                                  placeholder='Email address'
                                  name='email'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                />
                                <div className='error-msg'>{errors.email}</div>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='finaxis-input-label'>
                                Job title<span>*</span>
                              </div>
                              <div className='finaxis-form-input'>
                                <input
                                  type='text'
                                  id='inputpassword1'
                                  placeholder='Job title'
                                  name='job'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.job}
                                />
                                <div className='error-msg'>{errors.job}</div>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='finaxis-input-label'>
                                Company name<span>*</span>
                              </div>
                              <div className='finaxis-form-input'>
                                <input
                                  type='email'
                                  id='inputpassword1'
                                  placeholder='Company name'
                                  name='company'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.company}
                                />
                                <div className='error-msg'>
                                  {errors.company}
                                </div>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='finaxis-input-label'>
                                Phone number (Optional)
                              </div>
                              <div className='finaxis-form-input'>
                                <input
                                  type='text'
                                  id='inputpassword1'
                                  placeholder='Phone number'
                                  name='phone'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.phone}
                                />
                                <div className='error-msg'>{errors.phone}</div>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='finaxis-input-label'>
                                Country/Region<span>*</span>
                              </div>
                              <div className='finaxis-form-input'>
                                <div className='position-relative'>
                                  <div className='contact-drop-box'>
                                    <a
                                      href='javascript:void(0)'
                                      id='finaxisCountry'
                                      className='finaxis-contact-droplist'
                                    >
                                      <div
                                        className='select-active'
                                        onClick={() => {
                                          setShowDropdown(true)
                                          setshowCountry(!showCountry)
                                        }}
                                      >
                                        <div className=''>
                                          <div
                                          // className={classnames('', {
                                          //   '': showDropdown
                                          // })}
                                          >
                                            {selectedTag1
                                              ? selectedTag1
                                              : 'London, Uinted Kingdom'}
                                          </div>

                                          <div
                                            className={
                                              showCountry == true
                                                ? 'finaxiscontact-dropdown-content show'
                                                : 'finaxiscontact-dropdown-content  '
                                            }
                                          >
                                            {showDropdown &&
                                              filters.map(f => (
                                                <div
                                                  className='contact-inner'
                                                  onClick={() => {
                                                    setSelectedTag1(f.label)
                                                    setShowDropdown(false)
                                                    setshowCountry(false)
                                                  }}
                                                >
                                                  {f.label}
                                                </div>
                                              ))}
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div
                                    id='finaxisCountry-DropdownList'
                                    className='finaxiscontact-dropdown-content'
                                  >
                                    <ul className='contact-drop-scrollable contact-custom-wd'>
                                      {/* <li><div className="contact-inner">London, Uinted Kingdom</div></li>
                                                                <li><div className="contact-inner"></div> </li>
                                                                <li><div className="contact-inner"></div></li>
                                                                <li><div className="contact-inner"> </div></li>
                                                                <li><div className="contact-inner"></div></li>
                                                                <li><div className="contact-inner"></div></li> */}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='finaxis-input-label'>
                                Intrested in<span>*</span>
                              </div>
                              <div className='finaxis-form-input'>
                                <div className='position-relative'>
                                  <div className='contact-drop-box'>
                                    <a
                                      href='javascript:void(0)'
                                      id='finaxisCrypto'
                                      className='finaxis-contact-droplist'
                                    >
                                      <div
                                        className='select-active'
                                        onClick={() => {
                                          setShowDropdown(true)
                                          setshow(!show)
                                        }}
                                      >
                                        <div className=''>
                                          <div
                                          // className={classnames('', {
                                          //   '': showDropdown
                                          // })}
                                          >
                                            {selectedTag
                                              ? selectedTag
                                              : 'Crypto Service'}
                                          </div>

                                          <div
                                            className={
                                              show == true
                                                ? 'finaxiscontact-dropdown-content show'
                                                : 'finaxiscontact-dropdown-content  '
                                            }
                                          >
                                            {showDropdown &&
                                              filter.map(f => (
                                                <div
                                                  className='contact-inner'
                                                  onClick={() => {
                                                    setSelectedTag(f.label)
                                                    setShowDropdown(false)
                                                    setshow(false)
                                                  }}
                                                >
                                                  {f.label}
                                                </div>
                                              ))}
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                  <div id='finaxisCrypto-DropdownList'>
                                    <ul className='contact-drop-scrollable contact-custom-wd'>
                                      {/* <li><div className="contact-inner">Crypto Service</div></li>
                                                                <li><div className="contact-inner"></div> </li>
                                                                <li><div className="contact-inner"></div></li>
                                                                <li><div className="contact-inner"> </div></li>
                                                                <li><div className="contact-inner"></div></li>
                                                                <li><div className="contact-inner"></div></li> */}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='col-md-12'>
                              <div className='finaxis-input-label'>Message</div>
                              <div className='finaxis-form-input'>
                                <textarea
                                  placeholder='Message'
                                  className='floating-input'
                                >
                                  I really to be part of Finaxis.
                                </textarea>
                              </div>
                            </div>
                            <div className='col-md-12'>
                              <label className='finaxis-coontactcheckbox-container'>
                                Yes, I would like to receive periodic emails
                                from Fintech with news about the company,
                                product updates, thought-leadership, and event
                                invitations.
                                <input
                                  type='checkbox'
                                  name='check'
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.check}
                                />
                                <span className='finaxis-contactcheckmark'></span>
                              </label>
                            </div>
                            <div className='col-md-12'>
                              <div className='finaxis-gcaptcha'>
                                <ReCAPTCHA
                                  // ref={recaptchaRef}
                                  sitekey='6LfrFKQUAAAAAMzFobDZ7ZWy982lDxeps8cd1I2i'
                                  onChange={value =>
                                    setFieldValue('captcha', value)
                                  }
                                />
                              </div>
                            </div>
                            <div className='col-md-12'>
                              <div className='finaxis-contact-btn'>
                                <button
                                  type='submit'
                                  className='btn finexplore-btn'
                                >
                                  Get in touch
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
              <div className='col-xl-6 col-lg-12'>
                <div className='finaxis-contact-block-lft'>
                  <div className='finaxis-contact-img-block'>
                    <img
                      src='/images/contact-img1.png'
                      className='img-fluid'
                      alt='contact'
                    />
                  </div>
                  <div className='finaxis-contact-add'>
                    <h3>London</h3>
                    <p>48 Pirroma Rd.</p>
                    <p>Pyrmont NSW 2009</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='finaxis-contact-btm-bg'>
            <img
              src='/images/bg-blur-img.png'
              className='img-fluid'
              alt='contact'
            />
          </div>
        </div>
      </div>{' '}
      <Footer />
    </>
  )
}

export default contact
