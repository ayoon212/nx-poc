import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

export default () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>Blog post content goes here!</p>
    </Layout>
  );
}
