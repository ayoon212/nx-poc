import React from 'react';
import Link from 'next/Link';

import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>NX Workspace POC</h1>
    <Link href="/about">
      <a title="About Page">About</a>
    </Link>
  </Layout>
)
