import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoIMG from '../../assets/images/logo.svg';
import landingIMG from '../../assets/images/landing.svg';

import studyIC from '../../assets/images/icons/study.svg';
import giveClassesIC from '../../assets/images/icons/give-classes.svg';
import purpleHeartIC from '../../assets/images/icons/purple-heart.svg';

const Landing = () => {
  return (
    <div id="page-landing">
      <div className="container" id="page-landing-content">
        <div className="logo-container">
          <img src={logoIMG} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img
          src={landingIMG}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIC} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIC} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas{' '}
          <img src={purpleHeartIC} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
