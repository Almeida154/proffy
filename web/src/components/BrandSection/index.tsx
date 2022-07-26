import './styles.scss';

import logo from '../../assets/images/logo.svg';
import brandSectionBG from '../../assets/images/brand-section-background.png';

const BrandSection: React.FC = () => {
  return (
    <div
      className="brand-container"
      style={{
        backgroundImage: `url(${brandSectionBG})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div>
        <img src={logo} alt="Logo" />
        <p>
          Sua plataforma de <br /> estudos online
        </p>
      </div>
    </div>
  );
};

export default BrandSection;
