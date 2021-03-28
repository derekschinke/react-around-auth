import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PopupWithForm from './PopupWithForm';

function Login(props) {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(email, password);
    if (localStorage.getItem('jwt')) {
      history.push('/');
    }
  }

  return (
    <section className="account">
      <h2 className="account__title">Log in</h2>
      <PopupWithForm
        name="account"
        buttonValue="Log in"
        submitButtonClass="button_type_submit_type_account"
        onSubmit={handleSubmit}
      >
        <label>
          <input
            className="popup__input popup__input_type_account"
            placeholder="Email"
            required
            value={email}
            onChange={handleEmailChange}
            type="email"
          ></input>
        </label>
        <label>
          <input
            className="popup__input popup__input_type_account"
            placeholder="Password"
            required
            value={password}
            onChange={handlePasswordChange}
            type="password"
          ></input>
        </label>
        <div className="popup__spacer"></div>
      </PopupWithForm>
      <Link to="/signup" className="account__link button">
        Not a member yet? Sign up here!
      </Link>
    </section>
  );
}

export default Login;
