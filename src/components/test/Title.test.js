import React from 'react';
import { render } from '@testing-library/react';

import Title from "../Title";

test("renders title component", () => {

  const { getByText } = render(<Title title="Mock title" />);
  const postTitle = getByText(/Mock title/);

  expect(postTitle).toBeInTheDocument();
});