import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders top stories page', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/NYT News - Top Stories ?0?/);
  expect(titleElement).toBeInTheDocument();
});