import React from 'react';

import './styles.css';

import logoIMG from '../../images/logo.svg';
import landingIMG from '../../images/landing.svg';

import studyIC from '../../images/icons/study.svg';
import giveClassesIC from '../../images/icons/give-classes.svg';
import purpleHeartIC from '../../images/icons/purple-heart.svg';

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
          <a href="#" className="study">
            <img src={studyIC} alt="Estudar" />
            Estudar
          </a>
          <a href="#" className="give-classes">
            <img src={giveClassesIC} alt="Dar aulas" />
            Dar aulas
          </a>
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
