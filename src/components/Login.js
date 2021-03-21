import { Link } from 'react-router-dom';
import PopupWithForm from './PopupWithForm';

function Login() {
  return (
    <section className="account">
      <h2 className="account__title">Log in</h2>
      <PopupWithForm
        name="account"
        buttonValue="Log in"
        submitButtonClass="button_type_submit_type_account"
      >
        <label>
          <input
            className="popup__input popup__input_type_account"
            placeholder="Email"
          ></input>
        </label>
        <label>
          <input
            className="popup__input popup__input_type_account"
            placeholder="Password"
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
