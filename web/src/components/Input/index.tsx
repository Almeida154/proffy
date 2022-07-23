import { TextField, TextFieldProps } from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';
import { FiEye } from 'react-icons/fi';

import './styles.scss';

interface InputI {
  isTheFirstOne?: boolean;
  isTheLastOne?: boolean;
}

const Input: React.FC<InputI & TextFieldProps> = ({
  isTheFirstOne,
  isTheLastOne,
  type,
  ...rest
}) => {
  const { theme } = useTheme();

  return (
    <TextField
      {...rest}
      className="field"
      inputProps={{
        style: {
          color: '#6A6180',
          fontSize: 16,
          fontFamily: 'Poppins',
          paddingInlineEnd: 24,
        },
      }}
      InputLabelProps={{
        style: {
          paddingInline: 12,
          paddingBlock: 8,
          fontSize: 16,
          fontFamily: 'Poppins',
          color: '#C1BCCC',
        },
      }}
      InputProps={{
        style: {
          backgroundColor: theme == 'light' ? '#fff' : '#111111',
          background: theme == 'light' ? '#fff' : '#111111',
          paddingBlock: 8,
          paddingInline: 8,
          paddingInlineEnd: 24,
          borderEndEndRadius: isTheLastOne ? 8 : 0,
          borderEndStartRadius: isTheLastOne ? 8 : 0,
          borderStartEndRadius: isTheFirstOne ? 8 : 0,
          borderStartStartRadius: isTheFirstOne ? 8 : 0,
        },
        disableUnderline: true,
        endAdornment: type == 'password' && (
          <FiEye
            style={{ cursor: 'pointer' }}
            size={24}
            color="#9c98a6"
            onClick={() => console.log('aaa')}
          />
        ),
      }}
      variant="filled"
      fullWidth
      prefix="aa"
    />
  );
};

export default Input;
