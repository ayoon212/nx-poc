import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });

  it('contains a title "NX Workspace POC"', () => {
    const { getByText } = render(<Index />);
    expect(getByText('NX Workspace POC')).toBeTruthy();
  });
});
