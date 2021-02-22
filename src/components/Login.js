import { Link } from 'react-router-dom';

function Login() {
  return (
    <section>
      <h2 className="login__title">Log in</h2>
      <Link to="/signup" className="login__link">
        Not a member yet? Sign up here!
      </Link>
    </section>
  );
}

export default Login;
