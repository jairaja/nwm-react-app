import { render, screen } from '@testing-library/react';
import App from './App';

test('renders index page', () => {
  render(<App />);
  const startupElement = screen.getByText(/No Row Selected./i);
  expect(startupElement).toBeInTheDocument();
});
