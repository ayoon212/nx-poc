import React from 'react';
import Link from 'next/Link';
import styled from '@emotion/styled';

const Header = styled.header`
  box-shadow: 0 3px 3px #eee;
  padding: 1em;
`;

export default () => (
  <Header>
    <div>Global Header</div>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/characters"><a>Characters</a></Link></li>
    </ul>
  </Header>
);
