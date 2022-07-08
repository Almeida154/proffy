import React, { Children } from 'react';

import { Link } from 'react-router-dom';

import logoIMG from '../../assets/images/logo.svg';
import backIC from '../../assets/images/icons/back.svg';

import './styles.css';

interface IPageHeader {
  title: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<IPageHeader> = ({ title, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIC} alt="Voltar" />
        </Link>
        <img src={logoIMG} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {children ?? children}
      </div>
    </header>
  );
};

export default PageHeader;
