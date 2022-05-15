import { render, screen } from '@testing-library/react';
import App from './App';

test('render instructions link', () => {
  render(<App />);
  expect(screen.getByText(/Instructions/)).toBeInTheDocument();
})

test('render single player link', () => {
  render(<App />);
  expect(screen.getByText(/Single Player/)).toBeInTheDocument();
})