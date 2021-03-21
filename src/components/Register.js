import { Link } from 'react-router-dom';
import PopupWithForm from './PopupWithForm';

function Register() {
  return (
    <section className="account">
      <h2 className="account__title">Sign up</h2>
      <PopupWithForm name="account" buttonValue="Sign up">
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
      {/* <form className="popup__form popup__form_type_account">
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
        <input
          className="button button_type_submit button_type_submit_type_account"
          type="submit"
          value="Sign up"
        ></input>
      </form> */}
      <Link to="/signin" className="account__link button">
        Already a member? Log in here!
      </Link>
    </section>
  );
}

export default Register;
