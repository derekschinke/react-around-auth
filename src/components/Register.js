import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className="login">
      <h2 className="login__title">Sign up</h2>
      <form>
        <label>
          <input></input>
        </label>
        <label>
          <input></input>
        </label>
        <input></input>
      </form>
      <Link to="/signin" className="login__link button">
        Already a member? Log in here!
      </Link>
    </section>
  );
}

export default Register;
