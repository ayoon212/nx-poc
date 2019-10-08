import { useRouter } from 'next/router';
import Layout from '../../components/layout';

export default () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p>Nested blog post with dynamic id!</p>
    </Layout>
  );
}
