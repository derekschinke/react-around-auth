import { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Card from './Card';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__data">
          <div>
            <div
              role="img"
              aria-label=""
              className="profile__avatar"
              style={{ backgroundImage: `url(${currentUser.avatar})` }}
              onClick={props.onEditAvatar}
            ></div>
            <button
              type="button"
              aria-label="Edit avatar"
              className="button button_type_edit-avatar"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="profile__name">{currentUser.name}</h1>
              <p className="profile__job">{currentUser.about}</p>
            </div>
            <button
              type="button"
              aria-label="Edit profile"
              className="button button_type_edit"
              onClick={props.onEditProfile}
            ></button>
          </div>
        </div>
        <button
          aria-label="Add card"
          className="button button_type_add"
          onClick={props.onAddCard}
        ></button>
      </section>

      <section className="places">
        <ul className="places__list">
          {props.cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              onCardClick={() => {
                props.onCardClick(card);
              }}
              onCardLike={() => {
                props.onCardLike(card);
              }}
              onCardDelete={() => {
                props.onCardDelete(card);
              }}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
