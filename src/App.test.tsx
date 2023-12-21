import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component', () => {
  render(<App />);
  const linkElement = screen.getByText(/ReactMemo Re-rendering Experiments/i);
  expect(linkElement).toBeInTheDocument();
});
