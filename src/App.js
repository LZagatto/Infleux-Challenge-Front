import Layout from "./components/Layout";
import GlobalStyles from "./styles/GlobalStyles";

import {AdvertiseContextProvider} from "./context/AdvertiseContext";

function App() {
  return (
    <>
    <AdvertiseContextProvider>
      <Layout/>
    </AdvertiseContextProvider>
    <GlobalStyles/>
    </>
  );
}

export default App;
