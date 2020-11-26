import AppLink from '../AppLink';
import Button from '../Button';

const Card = ({ card: { _id, title, content, link }, onHandleDeleteClick }) => {

  return (
    <div className="card">
      <AppLink href={`/cards/${_id}`} className="card__title">{title}</AppLink>
      <p className="card__content">{content}</p>
      <a href={link} target="_blank" className="card__link">{link}</a>
      { onHandleDeleteClick && <>
        <hr/>
        <Button onClick={() => onHandleDeleteClick(_id)}>Delete</Button>
      </> }
      
    </div>
  )
};

export default Card;
