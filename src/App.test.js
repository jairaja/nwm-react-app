import { render, screen } from '@testing-library/react';
import App from './App';

test('renders index page', () => {
  render(<App />);
  const linkElement = screen.getByText(/No Row Selected./i);
  expect(linkElement).toBeInTheDocument();
});
