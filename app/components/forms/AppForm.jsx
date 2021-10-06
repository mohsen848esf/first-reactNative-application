import React from "react";
import { Formik } from "formik";

function AppForm({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  ...otherProps
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...otherProps}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
