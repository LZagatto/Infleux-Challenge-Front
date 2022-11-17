import React, { useContext } from 'react';

import { AdvertiseContext } from '../../context/AdvertiseContext';
import { Container, ButtonArea, Button, EditIcon, DeleteIcon } from './styles';

export default function Advertise({
  id,
  campaignName,
  country,
  conversion,
  bid,
}) {
  const { handleEdit, handleDelete } = useContext(AdvertiseContext);

  return (
    <div>
      <Container>
        <h2>{campaignName}</h2>
        <span>{country}</span>
        <span>{conversion}</span>
        <span>{bid}</span>
        <ButtonArea>
          <Button
            onClick={() =>
              handleEdit(id, campaignName, country, conversion, bid)
            }
          >
            <EditIcon />
          </Button>
          <Button onClick={() => handleDelete(id)}>
            <DeleteIcon />
          </Button>
        </ButtonArea>
      </Container>
    </div>
  );
}
