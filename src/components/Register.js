import { Link } from 'react-router-dom';
import PopupWithForm from './PopupWithForm';

function Register() {
  return (
    <section className="account">
      <h2 className="account__title">Sign up</h2>
      <PopupWithForm
        name="account"
        buttonValue="Sign up"
        submitButtonClass="button_type_submit_type_account"
      >
        <label>
          <input
            className="popup__input popup__input_type_account"
            placeholder="Email"
            required
          ></input>
        </label>
        <label>
          <input
            className="popup__input popup__input_type_account"
            placeholder="Password"
            required
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
