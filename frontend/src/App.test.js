import { render, screen } from '@testing-library/react';
import App from './Components/App';

test('renders learn react link', () => {
  render(<App />);
  const massDelete = screen.getByText(/MASS DELETE/i);
  const Add = screen.getByText(/ADD/i)
  expect(massDelete).toBeInTheDocument();
  expect(Add).toBeInTheDocument();
});
