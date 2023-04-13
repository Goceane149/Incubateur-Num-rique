import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="container2">
      <div className="text-red-700 ml-6 mt-2 text-center text-sm font-extrabold flex-row">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
};
