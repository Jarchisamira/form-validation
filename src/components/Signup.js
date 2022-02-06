import React from "react";
import { Formik, Form } from "formik";
import { Textinput } from "./TextInput";
import { schema } from "../validation/registerValidation";
import { useSignup } from "../hooks/useSignup";

export const Signup = () => {
  const { onSignup, signupInitialValues } = useSignup();
  return (
    <Formik
      initialValues={signupInitialValues}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        onSignup(values);
        resetForm();
      }}
    >
      {() => (
        <div className="mt-5 p-4 Small shadow bg-light rounded">
          <h1 className="mb-4 font-weight-bold-display-4">Sign up</h1>
          <Form>
            <Textinput label="First Name" name="firstName" type="text" />
            <Textinput label="Last Name" name="lastName" type="text" />
            <Textinput label="Email" name="email" type="text" />
            <Textinput label="Password" name="password" type="password" />
            <Textinput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />

            <button className="btn btn-dark mt-3" type="submit">
              Register
            </button>
            <button className="btn btn-danger mt-3 mx-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
