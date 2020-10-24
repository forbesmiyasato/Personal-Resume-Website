import React from 'react';
import { Layout } from 'components/common';
import { Link } from 'gatsby';

export default () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p><Link to="/">Head back to home page.</Link></p>
  </Layout>
);
