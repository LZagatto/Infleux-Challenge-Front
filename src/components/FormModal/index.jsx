import React, { useContext } from 'react';
import { AdvertiseContext } from '../../context/AdvertiseContext';

import {
  Overlay,
  Container,
  Header,
  FormContainer,
  FormMain,
  InputGroup,
  Footer,
  CheckIcon,
  CloseIcon,
} from './styles';

export default function FormModal() {
  const {
    handleClose,
    nameCampaign,
    nameCampaignHandler,
    country,
    countryHandler,
    conversion,
    conversionHandler,
    bid,
    bidHandler,
    handleSubmit,
    verify,
  } = useContext(AdvertiseContext);

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>{verify ? 'Editar Campanha' : 'Cadastrar Campanha'}</strong>
          {console.log(verify)}
          <button type="button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer>
          <FormMain>
            <InputGroup>
              <label htmlFor="nameCampaign">Nome da campanha</label>
              <input
                id="nameCampaign"
                type="text"
                value={nameCampaign}
                onChange={nameCampaignHandler}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="country">País</label>
              <select
                id="country"
                type="text"
                value={country}
                name="country"
                placeholder="Insert a title"
                onChange={countryHandler}
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
              </select>
            </InputGroup>
            <InputGroup>
              <label htmlFor="conversion">Conversão</label>
              <select
                id="conversion"
                type="text"
                name="conversao"
                value={conversion}
                onChange={conversionHandler}
              >
                <option value="" selected disabled>
                  Selecione uma opção
                </option>
                <option value="CPC">CPC {'(Custo por clique)'}</option>
                <option value="CPM">CPM {'(Custo por mil impressões)'}</option>
                <option value="CPI">CPI {'(Custo por instalação)'}</option>
              </select>
            </InputGroup>
            <InputGroup>
              <label htmlFor="bid">Lance</label>
              <input id="bid" type="text" value={bid} onChange={bidHandler} />
            </InputGroup>
          </FormMain>
          <Footer>
            <button type="submit" onClick={handleSubmit}>
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  );
}
