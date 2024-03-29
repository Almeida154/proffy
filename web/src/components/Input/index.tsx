import { useState, useRef } from 'react';

import { TextField, TextFieldProps } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import './styles.scss';

interface InputI {
  isTheFirstOne?: boolean;
  isTheLastOne?: boolean;
  isPassword?: boolean;
  error?: boolean;
}

const Input: React.FC<InputI & TextFieldProps> = ({
  isTheFirstOne,
  isTheLastOne,
  isPassword,
  error,
  type,
  ...rest
}) => {
  const { theme } = useTheme();
  const inputRef = useRef<TextFieldProps>(null);

  const inputStyle = {
    backgroundColor: theme == 'light' ? '#fff' : '#111111',
    background: theme == 'light' ? '#fff' : '#111111',
    paddingBlock: 8,
    paddingInline: 8,
    paddingInlineEnd: 24,
    borderEndEndRadius: isTheLastOne ? 8 : 0,
    borderEndStartRadius: isTheLastOne ? 8 : 0,
    borderStartEndRadius: isTheFirstOne ? 8 : 0,
    borderStartStartRadius: isTheFirstOne ? 8 : 0,
    color: '#6A6180',
    fontSize: 16,
    fontFamily: 'Poppins',
  };

  const inputLabelStyle = {
    paddingInline: 12,
    paddingBlock: 8,
    fontSize: 16,
    fontFamily: 'Poppins',
    color: error ? '#D32F2F' : '#C1BCCC',
  };

  const [isPasswordVisible, setPasswordVisible] = useState(
    isPassword ? false : null
  );

  function PasswordIcon() {
    if (isPassword) {
      const size = 24;

      return isPasswordVisible ? (
        <FiEyeOff
          style={{ cursor: 'pointer' }}
          size={size}
          color="#8257E5"
          onClick={handlePasswordVisibilityToggle}
        />
      ) : (
        <FiEye
          style={{ cursor: 'pointer' }}
          size={size}
          color="#9c98a6"
          onClick={handlePasswordVisibilityToggle}
        />
      );
    }

    return null;
  }

  function handlePasswordVisibilityToggle() {
    setPasswordVisible(!isPasswordVisible);
  }

  function handleTextFielType() {
    if (isPassword) {
      return isPasswordVisible ? 'text' : 'password';
    }

    return type;
  }

  return (
    <TextField
      {...rest}
      className={`field ${error && 'error'}`}
      style={isTheFirstOne ? { marginTop: '4rem' } : {}}
      InputLabelProps={{ style: inputLabelStyle }}
      InputProps={{
        style: inputStyle,
        ref: inputRef,
        disableUnderline: true,
        endAdornment: isPassword && <PasswordIcon />,
      }}
      type={handleTextFielType()}
      variant="filled"
      fullWidth
      prefix="aa"
    />
  );
};

export default Input;
