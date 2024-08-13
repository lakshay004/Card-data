import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { api } from './APICall/api';
import './App.css';
import { Cardscomp } from './Component/Cardscomp';

interface apiresultInterface {
  current: number;
  result: Record<any, resultinterface>;
  total: number;
}

interface favoriteinterface {
  color: string;
  food: string;
  random_string: string;
  song: string;
}
interface APIDATAinterface {
  config: string;
  data: apiresultInterface;
  headers: string;
  request: string;
  status: string;
  statusText: string;
}

interface resultinterface {
  first_name: string;
  last_name: string;
  gender: string;
  image: string;
  profession: string;
  age: string;
  email: string;
  country: string;
  height: string;
  id: string;
  favorite: favoriteinterface;
}



function App() {
  const [apidata, setapidata] = useState<any>([]);
  const [datatobeshown, setdatatobeshown] = useState<any>([]);
  let tempappdata: any = [];

  const handlechange = (change: any) => {
    console.log('handlechange -', change)
    tempappdata = apidata;
    Object.assign(tempappdata.find((obj: any) => obj.id === change.id), change)
    setdatatobeshown(tempappdata.filter((elem: any) => elem.active === true))
    // console.log('tempappdata change-', tempappdata)
  }

  console.log('datatobeshown1', datatobeshown)

  useEffect(() => {
    (async () => await axios.get('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1')
      .then((resp: any) => setapidata(resp.data.results)))();
  }, [])


  return (
    <>
      <>
        <div>data to be shown</div>
        {
          datatobeshown.map((e: any) => {
            return (
              <div>
                {e.first_name}
              </div>
            )
          })
        }
      </>
      <div className="App">
        {
          apidata.length > 0 && apidata.map((elem: any) => {
            return (
              <Cardscomp elem={elem} handlechange={handlechange} />
            )
          })
        }
      </div>
    </>
  );
}

export default App;
