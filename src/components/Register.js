import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className="account">
      <h2 className="account__title">Sign up</h2>
      <form className="popup__form popup__form_type_account">
        <label>
          <input
            className="popup__input popup__input_type_account"
            defaultValue="Email"
          ></input>
        </label>
        <label>
          <input
            className="popup__input popup__input_type_account"
            defaultValue="Password"
          ></input>
        </label>
        <input
          className="button button_type_submit"
          type="submit"
          value="Sign up"
        ></input>
      </form>
      <Link to="/signin" className="account__link button">
        Already a member? Log in here!
      </Link>
    </section>
  );
}

export default Register;
