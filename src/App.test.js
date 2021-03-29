import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

test('renders learn react link', () => {
  render(
    <Router>
      <App />
    </Router>
  );
});
