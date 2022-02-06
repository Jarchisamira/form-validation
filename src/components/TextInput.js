import React from "react";
import { ErrorMessage, useField } from "formik";

export const Textinput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-4">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage component="div" className="error" name={field.name} />
    </div>
  );
};
