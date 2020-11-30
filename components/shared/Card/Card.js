import { AppLink, Button } from '../index';

const Card = ({ card: { _id, title, content, link }, onHandleDeleteClick }) => {

  return (
    <div className="card">
      <AppLink href={`/cards/${_id}`} className="card__title">{title}</AppLink>
      <p className="card__content">{content}</p>
      <a href={link} target="_blank" className="card__link">{link}</a>
      { onHandleDeleteClick && <>
        <hr/>
        <Button href={`/cards/${_id}/edit`}>Edit</Button>
        <hr/>
        <Button onClick={() => onHandleDeleteClick(_id)} theme="danger">Delete</Button>
      </> }
    </div>
  )
};

export default Card;
