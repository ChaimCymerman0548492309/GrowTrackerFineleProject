import { createContext, useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Router from './features/global/router/Router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import axios from 'axios';
import { Garden } from './features/gardens/interfaces/GardensInterFice';

// Move context creation outside the component
const GardenContext = createContext<Garden[] | undefined>(undefined);

function App() {
  // const [gardensData, setGardensData] = useState<Garden[] | undefined>();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:4000/garden-rest-api');
  //       if (response.data) {
  //         console.log('Data is available');
  //         setGardensData(response.data);
  //       } else {
  //         console.log('Data not coming from the server, the array is empty!');
  //       }
  //     } catch (e) {
  //       console.log(e + 'Error connecting to the server');
  //     }
  //   };

  //   fetchData(); 
  // }, []); 

  return (
    <>
      {/* <GardenContext.Provider value={gardensData}> */}
        <Provider store={store}>
          <Router />
        </Provider>
      {/* </GardenContext.Provider> */}
    </>
  );
}

export default App;
