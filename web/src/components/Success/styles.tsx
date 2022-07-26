import './styles.scss';

import brandSectionBG from '../../assets/images/brand-section-background.png';
import successCheckIC from '../../assets/images/icons/success-check-icon.svg';
import Button from '../Button';

interface SuccessI {
  title: string;
  subtitle: string;
  buttonProps: {
    onClick: () => void;
    text: string;
  };
}

const Success: React.FC<SuccessI> = ({
  title,
  subtitle,
  buttonProps: { onClick, text },
}) => {
  return (
    <div
      className="success-container"
      style={{
        backgroundImage: `url(${brandSectionBG})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'repeat',
      }}
    >
      <img src={successCheckIC} alt="Ícone de sucesso" />
      <h5>{title}</h5>
      <p>{subtitle}</p>
      <Button
        style={{ marginTop: '8rem', width: 220 }}
        text={text}
        onClick={onClick}
      />
    </div>
  );
};

export default Success;
