import React from 'react';

import { Container, ButtonArea } from './styles';

export default function AdvertiseHeader({
  campaignName,
  country,
  conversion,
  bid,
}) {
  return (
    <div>
      <Container>
        <h2>{campaignName}</h2>
        <h2>{country}</h2>
        <h2>{conversion}</h2>
        <h2>{bid}</h2>
        <ButtonArea></ButtonArea>
      </Container>
    </div>
  );
}
