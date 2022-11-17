import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import AdList from '../AdList';

import { Container } from './styles';

export default function Layout() {
  return (
    <Container>
      <Header />
      <AdList />
      <Footer />
    </Container>
  );
}
