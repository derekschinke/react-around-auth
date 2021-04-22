import { useState } from 'react';
import { Link } from 'react-router-dom';
import PopupWithForm from './PopupWithForm';

function Register(props) {
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
    props.handleRegistration(email, password);
  }

  return (
    <section className="account">
      <h2 className="account__title">Sign up</h2>
      <PopupWithForm
        name="account"
        buttonValue="Sign up"
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
            minLength="8"
          ></input>
        </label>
        <div className="popup__spacer"></div>
      </PopupWithForm>
      <Link to="/signin" className="account__link button">
        Already a member? Log in here!
      </Link>
    </section>
  );
}

export default Register;
