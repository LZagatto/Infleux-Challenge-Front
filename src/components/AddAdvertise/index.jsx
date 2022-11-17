import React, { useContext } from 'react';

import { AdvertiseContext } from '../../context/AdvertiseContext';

import { AddAdvertiseButton, AddIcon } from './styles';

export default function AddAdvertise() {
  const { handleAdd } = useContext(AdvertiseContext);

  return (
    <div>
      <AddAdvertiseButton onClick={handleAdd}>
        <AddIcon />
      </AddAdvertiseButton>
    </div>
  );
}
