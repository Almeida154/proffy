import { useNavigate } from 'react-router-dom';

import { useTheme } from '../../contexts/ThemeContext';

import logoIMG from '../../assets/images/logo.svg';
import blackLogoIMG from '../../assets/images/logo.black.svg';
import backIC from '../../assets/images/icons/back.svg';
import blackBackIC from '../../assets/images/icons/back.black.svg';
import sunIC from '../../assets/images/icons/sun.svg';
import moonIC from '../../assets/images/icons/moon.svg';

import './styles.scss';

interface IPageHeader {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<IPageHeader> = ({
  title,
  description,
  children,
}) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className="page-header">
      <div className="top-bar-container">
        <a onClick={() => navigate(-1)}>
          <img
            src={theme === 'dark' ? blackBackIC : backIC}
            alt="Voltar"
          />
        </a>
        <div>
          <div onClick={() => toggleTheme()}>
            <img
              src={theme === 'dark' ? sunIC : moonIC}
              alt="Theme Icon"
            />
          </div>
          <img
            src={theme === 'dark' ? blackLogoIMG : logoIMG}
            alt="Proffy"
          />
        </div>
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children ?? children}
      </div>
    </header>
  );
};

export default PageHeader;
