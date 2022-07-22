import whatsappIC from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import './styles.scss';

export type Teacher = {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
};
export interface TeacherItemI {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemI> = ({ teacher }) => {
  const handleCreateNewConnection = () => {
    api.post('connections', {
      user_id: teacher.id,
    });
  };

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          type="button"
          target="_blank"
          href={`https://api.whatsapp.com/send?phone=${teacher.whatsapp}`}
          onClick={handleCreateNewConnection}
        >
          <img src={whatsappIC} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
