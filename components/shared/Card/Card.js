import AppLink from '../AppLink';

const Card = ({ card: { _id, title, content, link } }) => (
  <div className="card">
    <AppLink href={`/cards/${_id}`} className="card__title">{title}</AppLink>
    <p className="card__content">{content}</p>
    <a href={link} target="_blank" className="card__link">{link}</a>
  </div>
);

export default Card;
