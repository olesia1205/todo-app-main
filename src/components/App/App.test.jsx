import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders TODO text', () => {
  render(<App />);
  const linkElement = screen.getByText(/TODO/i);
  expect(linkElement).toBeInTheDocument();
});
