import whatsappIC from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://github.com/Almeida154.png" alt="David" />
        <div>
          <strong>David Almeida</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet Lorem, ipsum dolor.
        <br />
        <br />
        consectetur adipisicing elit. Deserunt, doloribus. Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Totam vel modi
        tempore minima, dicta libero.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIC} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
