import React from 'react';
import Header from './header';
import styled from '@emotion/styled';

const Layout = styled.main`
  margin: 0 auto;
  padding: 1em 2em;
  max-width: 600px;
`;

export default ({ children }) => (
  <div>
    <Header />
    <Layout>
      {children}
    </Layout>
  </div>
);
