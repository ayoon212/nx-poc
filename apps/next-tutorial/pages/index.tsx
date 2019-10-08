import React from 'react';
import Link from 'next/Link';

import Layout from '../components/layout';

const PostLink = ({ id }) => (
  <li>
    <Link href="/post/[id]" as={`/post/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <h1>NX Workspace POC</h1>
    <PostLink id="winterfell" />
    <PostLink id="kings-landing" />
    <PostLink id="highgarden" />
  </Layout>
)
