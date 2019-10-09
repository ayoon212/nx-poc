import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Slug from '../../pages/character/[slug]';
import { FetchMock } from 'jest-fetch-mock';
const fetchMock = fetch as FetchMock;

describe('Slug', () => {
  beforeEach(fetchMock.resetMocks);
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { baseElement } = render(<Slug character={{}} />);
    expect(baseElement).toBeTruthy();
  });

  it('fetches and displays character data from URL slug', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([{
      name: 'Jon Snow',
      titles: ['Lord Commander of the Night\'s Watch']
    }]));
    const props = await Slug.getInitialProps({ query: { slug: 'jon_snow' }});
    const { getByText } = render(<Slug {...props} />);
    expect(getByText('Jon Snow')).toBeTruthy();
  });
});
