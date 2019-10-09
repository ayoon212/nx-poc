import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Layout from '../../components/layout';

describe('Layout', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { baseElement } = render(<Layout><div></div></Layout>);
    expect(baseElement).toBeTruthy();
  });

  it('renders child content', () => {
    const { getByText } = render(<Layout><div>foo</div></Layout>);
    expect(getByText('foo')).toBeTruthy();
  });
});
