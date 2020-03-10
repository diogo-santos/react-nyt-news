import React from 'react';
import { render } from '@testing-library/react';

import PostList from "./PostList";

test("renders post data", () => {
  const mockPosts = {
    num_results: 1,
    results: [
      {
        title: "Mock post",
        abstract: "Mock abstract",
        url: "Mock url",
        multimedia: [
          {
            url: "Mock url image"
          }
        ]
      }
    ]
  };

  const { getByText } = render(<PostList posts={mockPosts.results} />);
  const postTitle = getByText(/Mock post/);
  const postAbstract = getByText(/Mock abstract/);

  expect(postTitle).toBeInTheDocument();
  expect(postAbstract).toBeInTheDocument();
  expect(document.querySelector("a").getAttribute("href")).toBe("Mock url")
  expect(document.querySelector("img").getAttribute("src")).toBe("Mock url image")
});