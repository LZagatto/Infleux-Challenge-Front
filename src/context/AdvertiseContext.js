import { createContext, useState } from "react";
import FormModal from "../components/FormModal";
import api from "../services/api";

export const AdvertiseContext = createContext();

export function AdvertiseContextProvider({children}){
  const [openFormModal, setOpenFormModal] = useState(false);
  const [nameCampaign, setNameCampaign] = useState("");
  const [country, setCountry] = useState("");
  const [conversion, setConversion] = useState("");
  const [bid, setBid] = useState("");
  const [id, setId] = useState(false);
  const [verify, setVerify] = useState(false);

  function handleEdit(advertiseId, advertiseNameCampaign, advertiseCountry, advertiseConversion, advertiseBid) {
    setNameCampaign(advertiseNameCampaign);
    setCountry(advertiseCountry);
    setConversion(advertiseConversion);
    setBid(advertiseBid);
    setId(advertiseId);
    setOpenFormModal(true);
    setVerify(true);
  }

  function handleAdd() {
    setOpenFormModal(true);
    setVerify(false);
  }

  function handleClose() {
    if(nameCampaign){
      setNameCampaign('');
    }
    if(country){
      setCountry('');
    }
    if(conversion){
      setConversion('');
    }
    if(bid){
      setBid('');
    }
    setOpenFormModal(false);
  }

  function nameCampaignHandler(event) {
    setNameCampaign(event.target.value);
  }

  function countryHandler(event) {
    setCountry(event.target.value);
  }

  function conversionHandler(event) {
    setConversion(event.target.value);
  }

  function bidHandler(event) {
    setBid(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const campaign = {
      id,
      nameCampaign,
      country,
      conversion,
      bid
    };

    if(id){
      api.put(`editCampaign/${id}`, campaign);
    }else{
      api.post("registerCampaign", campaign);
    }
    setOpenFormModal(false);
    setVerify(false);
    window.location.reload(false);
  }
  
  function handleDelete(id) {
    api.delete(`deleteCampaign/${id}`);
    window.location.reload(false);
  }

  return(
    <AdvertiseContext.Provider
      value={{handleAdd, 
            handleClose, 
            handleSubmit,
            handleEdit,
            handleDelete,
            nameCampaign,
            setNameCampaign, 
            country, 
            setCountry, 
            conversion, 
            setConversion, 
            bid, 
            setBid, 
            nameCampaignHandler,
            countryHandler,
            conversionHandler,
            bidHandler,
            id, 
            setId,
            verify
      }}
    >
      {children}
      {openFormModal && <FormModal/>}
    </AdvertiseContext.Provider>
  )
}