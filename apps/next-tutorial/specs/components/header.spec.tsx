import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../../components/header';

describe('Header', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });

  it('contains links to "home" and "characters"', () => {
    const { getByText } = render(<Header />);
    expect(getByText(/home/i)).toBeTruthy();
    expect(getByText(/characters/i)).toBeTruthy();
  });
});
