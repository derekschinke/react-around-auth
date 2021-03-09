import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className="account">
      <h2 className="account__title">Log in</h2>
      <Link to="/signup" className="account__link button">
        Not a member yet? Sign up here!
      </Link>
    </section>
  );
}

export default Login;
