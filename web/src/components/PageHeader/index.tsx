import { Link } from 'react-router-dom';

import { useTheme } from '../../contexts/ThemeContext';

import logoIMG from '../../assets/images/logo.svg';
import backIC from '../../assets/images/icons/back.svg';
import sunIC from '../../assets/images/icons/sun.svg';
import moonIC from '../../assets/images/icons/moon.svg';

import './styles.css';

interface IPageHeader {
  title: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<IPageHeader> = ({ title, children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIC} alt="Voltar" />
        </Link>
        <div>
          <div onClick={() => toggleTheme()}>
            <img
              src={theme === 'dark' ? sunIC : moonIC}
              alt="Theme Icon"
            />
          </div>
          <img src={logoIMG} alt="Proffy" />
        </div>
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {children ?? children}
      </div>
    </header>
  );
};

export default PageHeader;
