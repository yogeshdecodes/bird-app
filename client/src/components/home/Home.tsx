import React from 'react';
import Layout from '../layout';
import CreateNewPost from '../post/CreateNewPost';

export default function Home() {
  return (
    <Layout title="Home">
      <CreateNewPost />
    </Layout>
  );
}
