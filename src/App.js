import './App.css';
import Header from './components/header/Header';
import React,{useState,useEffect} from "react";
import axios from "axios";
import MainViewer from './components/mainViewer/MainViewer';
import ApeList from './components/apeList/ApeList';

function App() {
  const [collections,setCollections] = useState([])
  const [selectedApe,setSelectedApe] = useState(2)

  useEffect(() => {
  getMyNfts()
  },[])

  const getMyNfts = async () => {
    const openSeaData = await axios.get(`https://testnets-api.opensea.io/assets?asset_contract_address=0x551776E75D423DA6E27A14F0ADf09e4BeB5dC7D7&order_direction=asc`)
    setCollections(openSeaData.data.assets)
  }


  return (
    <div className="App">
     <Header />
     {
      collections.length > 0 && (
        <>
          <MainViewer collections = {collections} selectedApe = {selectedApe} />
          <ApeList collections = {collections} setSelectedApe={setSelectedApe} />
        </>
      )
     }
    </div>
  );
}

export default App;
