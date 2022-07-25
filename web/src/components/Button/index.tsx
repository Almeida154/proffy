import React from 'react';

import './styles.scss';

interface ButtonI
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonI> = ({ text, disabled, ...rest }) => {
  return (
    <button className={disabled ? 'disabled' : ''} {...rest}>
      {text}
    </button>
  );
};

export default Button;
