/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useHistory,
} from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import api from '../utils/api';
import { register } from '../utils/auth';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithImage from './PopupWithImage';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddCardPopup from './AddCardPopup';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const history = useHistory();

  const [loggedIn, setLoggedIn] = useState(false);

  const [userEmail, setUserEmail] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([]);

  const [selectedCard, setSelectedCard] = useState({ link: '', name: '' });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  console.log(handleLogin);

  function handleCardClick(card) {
    setSelectedCard({ link: card.link, name: card.name });
    setIsImagePopupOpen(true);
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .updateCardLikes(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsInfoTooltipOpen(false);
  }

  function handleUpdateUser({ name, about }) {
    api
      .patchUserInfo({ name, about })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .patchAvatarImage(avatar.current.value)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddCard({ title, link }) {
    api
      .postCard({ title, link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegistration(email, password) {
    register(email, password)
      .then((res) => {
        if (res.error) {
          setIsSuccess(false);
          setIsInfoTooltipOpen(true);
          throw new Error(res.error);
        } else {
          setIsSuccess(true);
          setIsInfoTooltipOpen(true);
          setUserEmail(email);
          history.push('/signin');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Router>
        <div className="page">
          <Switch>
            <Route exact path="/">
              <div
                className={`page__container page__container_around ${
                  isMenuOpen ? 'page__container_around_opened' : ''
                }`}
              >
                <Header headerStyle="header_type_around">
                  <div className="header__logo-and-hamburger">
                    <div
                      role="img"
                      aria-label="Around The U.S."
                      className="header__logo header__logo_around"
                    ></div>
                    <Hamburger
                      size={24}
                      color="#fff"
                      easing="ease"
                      label="Show menu"
                      toggled={isMenuOpen}
                      toggle={setIsMenuOpen}
                    />
                  </div>
                  <div className="header__account">
                    <p className="header__user-email">{userEmail}</p>
                    <Link to="/signin" className="header__log-out button">
                      Log out
                    </Link>
                  </div>
                </Header>

                <ProtectedRoute
                  component={Main}
                  cards={cards}
                  loggedIn={loggedIn}
                  onEditAvatar={handleEditAvatarClick}
                  onEditProfile={handleEditProfileClick}
                  onAddCard={handleAddPlaceClick}
                  onCardClick={(card) => {
                    handleCardClick(card);
                  }}
                  onCardLike={(card) => {
                    handleCardLike(card);
                  }}
                  onCardDelete={(card) => {
                    handleCardDelete(card);
                  }}
                />
                <Footer />
              </div>
              <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
              />

              <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
              />

              <AddCardPopup
                isOpen={isAddCardPopupOpen}
                onClose={closeAllPopups}
                onAddCard={handleAddCard}
              />

              <PopupWithImage
                card={selectedCard}
                isOpen={isImagePopupOpen}
                onClose={closeAllPopups}
              />
            </Route>

            <Route exact path="/signup">
              <div className="page__container">
                <Header headerStyle="header">
                  <div
                    role="img"
                    aria-label="Around The U.S."
                    className="header__logo"
                  ></div>
                  <Link to="/signin" className="header__link button">
                    Log in
                  </Link>
                </Header>

                <Register handleRegistration={handleRegistration}></Register>
              </div>
              <InfoTooltip
                isOpen={isInfoTooltipOpen}
                isSuccess={isSuccess}
                onClose={closeAllPopups}
              ></InfoTooltip>
            </Route>

            <Route exact path="/signin">
              <div className="page__container">
                <Header headerStyle="header">
                  <div
                    role="img"
                    aria-label="Around The U.S."
                    className="header__logo"
                  ></div>
                  <Link to="/signup" className="header__link button">
                    Sign up
                  </Link>
                </Header>

                <Login></Login>
              </div>
            </Route>

            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </Router>
    </CurrentUserContext.Provider>
  );
}

export default App;
