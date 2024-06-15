import React from 'react';
import { Formik, Form, ErrorMessage, Field } from "formik"
import * as Yup from 'yup'


function Forming() {

    
    const initialValues =  {email: "", username: "", password: ""};
    const onSubmit = (values) => {console.log("onSubmit", values)};
    const validationSchema = Yup.object({
        email: Yup.string().required("Email is Required").email("Invalid Email Address"),
        password: Yup.string().required("Password is required"),
        username: Yup.string().required("Username is required"),
        gender: Yup.string().required('Gender is required'),
      })

  return (
  <div>
      <h1>Welcome to Routing</h1>
      <section className="container d-flex flex-wrap justify-content-center">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {() => (
        <Form>
          <div className="field">
            <Field name="email" placeholder="Email" />
              <div className="error"> 
                <ErrorMessage name="email" component="span" />
              </div>
          </div>
          <div className="field">
            <Field name="username" placeholder="Username" />
              <div className="error">
                <ErrorMessage name="username" component="span" />
              </div>
          </div>
          <div className="field">
            <Field name="password" placeholder="Password" type="password" />
        
            <div className="error">
                <ErrorMessage name="password" component="span" />
            </div>
          </div>
          <div className="field">
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
              <div className="error">
                <ErrorMessage name="gender" component="span" />
              </div>
            </div>
          <button type="submit">Submit</button>
      </Form>
      )
        }
      
      </Formik>
      </section>
      
  </div>
  )
    
}

export default Forming;
