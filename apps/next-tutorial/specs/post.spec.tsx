import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Post from '../pages/post';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: { title: 'foo' }
    }
  }
}));

describe('Post', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { baseElement } = render(<Post />);
    expect(baseElement).toBeTruthy();
  });

  it('displays the title given in query string', () => {
    const { getByText } = render(<Post />);
    expect(getByText('foo')).toBeTruthy();
  });
});
