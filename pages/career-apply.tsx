import React from 'react'
import Otherheader from '../Component/other-header'
import Footer from '../Component/footer'
import ReCAPTCHA from 'react-google-recaptcha'

import { Formik, FormikErrors } from 'formik'
import * as Yup from 'yup'
interface MyFormValues {
    email: string
    myfile: string
    fname: string

}
const initialValues: MyFormValues = {
    email: '',
    myfile: '',
    fname: '',

}
const recaptchaRef = React.createRef()
const CareerApply = () => {
    return (<>
        <div className='finaxis-blue-bg'>
            <Otherheader />
            <div className="finaxis-career-sect">
                <div className="finaxis-container">
                    <div className="finaxis-career2-block">
                        <div className="finaxis-career-hd3">
                            <h2>Administrative Business Partner to <br />CBO / Business Development & Partnerships</h2>
                            <p>Full-time | Flow | Remote (PST time zone) | Business Operations</p>
                        </div>
                        <div className="finaxis-career2-form-block">

                            <div className="finaxis-career2-innerform-block">
                                <h3>SUBMIT YOUR APPLICATION</h3>
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

                                        fname: Yup.string()
                                            .min(2, 'Too Short!')
                                            .max(500, 'Too Long!')
                                            .required('Please enter first name'),
                                        myfile: Yup.string()

                                            .required('Please attach ressume'),

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
                                            <div className="finaxis-career-form-input">
                                                <div className="finaxis-career-input-label">Resume<span>*</span></div>
                                                <div className="finaxis-career-input-field">
                                                    <button className="uploadbtn"><span><img src="/images/Attachment.png" className="img-fluid" alt="Attachment" /></span>Attach Resume/CV</button>
                                                    <input type="file" name="myfile" className="uploadlogo"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.myfile} />  <div className='error-msg'>{errors.myfile}</div>
                                                </div>
                                            </div>
                                            <div className="finaxis-career-form-input">
                                                <div className="finaxis-career-input-label">Full name<span>*</span></div>
                                                <div className="finaxis-career-input-field"><input type="text" placeholder="Jai SIngh" name='fname'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.fname} />  <div className='error-msg'>{errors.fname}</div></div>
                                            </div>
                                            <div className="finaxis-career-form-input">
                                                <div className="finaxis-career-input-label">Email<span>*</span></div>
                                                <div className="finaxis-career-input-field"><input type="email" placeholder="jai.websearch@gmail.com" name='email'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email} />  <div className='error-msg'>{errors.email}</div></div>
                                            </div>
                                            <div className="finaxis-career-form-input">
                                                <div className="finaxis-career-input-label">Phone</div>
                                                <div className="finaxis-career-input-field"><input type="text" placeholder="Phone" name="phone" /></div>
                                            </div>
                                            <div className="finaxis-career-form-input">
                                                <div className="finaxis-career-input-label">Current company</div>
                                                <div className="finaxis-career-input-field"><input type="text" placeholder="Current company" /></div>
                                            </div>

                                            <h3>LINKS</h3>
                                            <div className="finaxis-career-form-input">
                                                <div className="finaxis-career-input-label">LinkedIn URL</div>
                                                <div className="finaxis-career-input-field"><input type="text" placeholder="LinkedIn URL" /></div>
                                            </div>
                                            <div className="finaxis-career-form-input">
                                                <div className="finaxis-career-input-label">Other website</div>
                                                <div className="finaxis-career-input-field"><input type="text" placeholder="website" /></div>
                                            </div>
                                            <h3>ADDITIONAL INFORMATION</h3>
                                            <div className="finaxis-career-form-input creer-mb-27">
                                                <textarea placeholder="Add a cover letter or anything else you want to share." className="floating-input"></textarea>
                                            </div>
                                            <div className="finaxis-career-form-input creer-mb-32">
                                                <label className="finaxis-coontactcheckbox-container">Yes, Finaxis contact me about future job opportunities for up to 4 years
                                                    <input type="checkbox" />
                                                    <span className="finaxis-contactcheckmark"></span>
                                                </label>
                                            </div>
                                            <div className="finaxis-career-form-input">
                                                <div className="finaxis-gcaptcha"> <ReCAPTCHA
                                                    // ref={recaptchaRef}
                                                    sitekey='6LfrFKQUAAAAAMzFobDZ7ZWy982lDxeps8cd1I2i'
                                                    onChange={value =>
                                                        setFieldValue('captcha', value)
                                                    }
                                                /></div>
                                            </div>
                                            <div className="d-flex"><a href="#" className="btn finaxis-caree-apply-btn">Submit Application</a></div>
                                        </form>
                                    )}
                                </Formik>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="finaxis-career-btm-bg"><img src="/images/bg-blur-img.png" className="img-fluid" alt="contact" /></div>
            </div>
        </div> <Footer /></>
    )
}

export default CareerApply
