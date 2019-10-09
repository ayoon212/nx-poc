import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Characters from '../pages/characters';
import { FetchMock } from 'jest-fetch-mock';
const fetchMock = fetch as FetchMock;

describe('Character', () => {
  beforeEach(fetchMock.resetMocks);
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { baseElement } = render(<Characters />);
    expect(baseElement).toBeTruthy();
  });

  it('displays fetched Character data', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([{
      url: '/mock/jon-snow',
      name: 'Jon Snow'
    }]));
    const props = await Characters.getInitialProps();
    const { getByText } = render(<Characters {...props} />);
    expect(getByText('Jon Snow')).toBeTruthy();
  });

  it('displays character aliases if they exist', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([{
      url: '/mock/jon-snow',
      name: 'Jon Snow',
      aliases: [ 'Lord Commander' ]
    }]));
    const props = await Characters.getInitialProps();
    const { getByText } = render(<Characters {...props} />);
    expect(getByText(/Lord Commander/)).toBeTruthy();
  });
});
