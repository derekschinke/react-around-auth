import { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  return (
    <li className="card">
      <button
        type="button"
        className={`button button_type_delete ${
          isOwn ? '' : 'button_type_delete_hidden'
        }`}
        onClick={props.onCardDelete}
      ></button>
      <div
        role="img"
        className="card__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        alt={props.card.name}
        onClick={props.onCardClick}
      ></div>
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div>
          <button
            type="button"
            aria-label="Like"
            className={`button button_type_like ${
              isLiked ? 'button_type_liked' : ''
            }`}
            onClick={props.onCardLike}
          ></button>
          <p className="card__likes">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
