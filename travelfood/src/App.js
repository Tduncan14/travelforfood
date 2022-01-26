import React, {useEffect,useState} from 'react';
import{CssBaseline,Grid} from '@material-ui/core';
import Header from './components/header/Header';
import List from './components/list/List';
import Map from './components/map/Map';
import getPlacesData from './api/index';


function App() {

  const [places, setPlaces] = useState([]);
  const [ coordinates,setCoordinates] = useState({lat:0,lng:0});
  const [dist,setBound] = useState(2);
  const [bounds,setBounds] = useState({});


    useEffect(() =>{


      console.log(coordinates,bounds)

      getPlacesData() .then( data =>{

          setPlaces(data)
          console.log(data);
            
         })
         


    },[])

  return (
  <>

  <CssBaseline />
  <Header />
  <Grid  container spacing={3} style={{width:'100%'}}>

    <Grid item={true} xs={12} md={4}>
      <List/>
   </Grid>

 

    <Grid item={true} xs={12} md={8}>
      <Map
        setCoordinates={setCoordinates}
        setBound={setBound}
        coordinates={coordinates}
        setBounds={setBounds}
      />

     </Grid>
  </Grid>
  </>
  );
}

export default App;
