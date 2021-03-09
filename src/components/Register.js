import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className="account">
      <h2 className="account__title">Sign up</h2>
      <form>
        <label>
          <input></input>
        </label>
        <label>
          <input></input>
        </label>
        <input></input>
      </form>
      <Link to="/signin" className="account__link button">
        Already a member? Log in here!
      </Link>
    </section>
  );
}

export default Register;
