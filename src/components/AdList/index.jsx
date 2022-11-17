import React, { useEffect, useState } from 'react';
import { Container, AdListWrapper, Row } from './styles';
import AddAdvertise from '../AddAdvertise';
import Advertise from '../Advertise';
import AdvertiseHeader from '../AdvertiseHeader';

import api from '../../services/api';

export default function AdList() {
  const [filtered, setFiltered] = useState([]);
  const [filteredList, setFilteredList] = new useState('');

  useEffect(() => {
    var filterCountry = filteredList;

    if (filteredList === 'Todos' || filteredList === '') {
      api.get('allCampaigns').then(({ data }) => {
        setFiltered(data.campaigns);
      });
    }
    api.get(`campaignCountry/${filterCountry}`).then(({ data }) => {
      setFiltered(data.campaign);
    });
  }, [filteredList]);

  return (
    <Container>
      <Row>
        <div>
          <label>Procurar melhor campanha:</label>
          <select
            id="country"
            onChange={(e) => {
              setFilteredList(e.target.value);
            }}
          >
            <option value="" selected disabled>
              Selecione uma opção
            </option>
            <option value="BR">Brasil</option>
            <option value="EUA">Estados Unidos</option>
            <option value="CN">China</option>
            <option value="JP">Japão</option>
            <option value="FRA">França</option>
            <option value="CUB">Cuba</option>
            <option value="EGY">Egito</option>
            <option value="Todos">Todos</option>
          </select>
        </div>
        <AddAdvertise />
      </Row>
      <AdListWrapper>
        <AdvertiseHeader
          campaignName="Nome da campanha"
          country="País"
          conversion="Tipo de conversão"
          bid="Lance"
        />
        {filtered?.map((campaigns) => (
          <>
            <Advertise
              key={campaigns._id}
              id={campaigns._id}
              campaignName={campaigns.nameCampaign}
              country={campaigns.country}
              conversion={campaigns.conversion}
              bid={campaigns.bid}
            />
          </>
        ))}
      </AdListWrapper>
    </Container>
  );
}
