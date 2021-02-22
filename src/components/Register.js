import { Link } from 'react-router-dom';

function Register() {
  return (
    <section>
      <h2 className="login__title">Sign up</h2>
      <Link to="/signin" className="login__link button">
        Already a member? Log in here!
      </Link>
    </section>
  );
}

export default Register;
