import './styles.scss';

import logo from '../../assets/images/logo.svg';

const BrandSection: React.FC = () => {
  return (
    <div className="brand-container">
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
