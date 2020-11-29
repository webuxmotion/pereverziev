import { Title } from '../index';

const FormCard = ({ children, title }) => (
  <div className="form-card">
    <div className="form-card__container">
      <Title>{title}</Title>

      <div className="form-card__form">
        {children}
      </div>
    </div>
  </div>
);

export default FormCard;
