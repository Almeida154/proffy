import React, { FormEvent, ReactNode } from 'react';

import './styles.scss';

interface FormI {
  children?: ReactNode;
  formSubmit: (e: FormEvent) => void;
}

const Form: React.FC<FormI> = ({ formSubmit, children }) => {
  return (
    <div className="form-container">
      <form onSubmit={formSubmit}>{children}</form>
    </div>
  );
};

export default Form;
