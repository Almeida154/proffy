import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoIMG from '../../assets/images/logo.svg';
import blackLogoIMG from '../../assets/images/logo.black.svg';
import landingIMG from '../../assets/images/landing.svg';

import studyIC from '../../assets/images/icons/study.svg';
import blackStudyIC from '../../assets/images/icons/study.black.svg';
import giveClassesIC from '../../assets/images/icons/give-classes.svg';
import blackGiveClassesIC from '../../assets/images/icons/give-classes.black.svg';
import purpleHeartIC from '../../assets/images/icons/purple-heart.svg';

import { useTheme } from '../../contexts/ThemeContext';

import api from '../../services/api';

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api
      .get('connections')
      .then((res) => setTotalConnections(res.data.total));
  }, []);

  const { theme } = useTheme();

  return (
    <div id="page-landing">
      <div className="container" id="page-landing-content">
        <div className="logo-container">
          <img
            src={theme === 'dark' ? blackLogoIMG : logoIMG}
            alt="Proffy"
          />

          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img
          src={landingIMG}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img
              src={theme === 'dark' ? blackStudyIC : studyIC}
              alt="Estudar"
            />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img
              src={
                theme === 'dark' ? blackGiveClassesIC : giveClassesIC
              }
              alt="Dar aulas"
            />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas{' '}
          <img src={purpleHeartIC} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
