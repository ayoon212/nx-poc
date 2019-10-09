import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ID from '../../pages/post/[id]';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: { id: 'foo' }
    }
  }
}));

describe('[id]', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    const { baseElement } = render(<ID />);
    expect(baseElement).toBeTruthy();
  });

  it('contains the id given in query string', () => {
    const { getByText } = render(<ID />);
    expect(getByText('foo')).toBeTruthy();
  });
});
