import React from 'react';
import { render } from '@testing-library/react';

import Title from "./Title";

test("renders title component", () => {
  const mockPosts = {
    num_results: 1
  };

  const { getByText } = render(<Title title="Mock title" posts={mockPosts.num_results} />);
  const postTitle = getByText(/Mock title ?1?/);

  expect(postTitle).toBeInTheDocument();
});