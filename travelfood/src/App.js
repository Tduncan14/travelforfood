import React, {useEffect,useState} from 'react';
import{CssBaseline,Grid} from '@material-ui/core';
import Header from './components/header/Header';
import List from './components/list/List';
import Map from './components/map/Map';
import getPlacesData from './api/index';


function App() {

  const [places, setPlaces] = useState([]);
  const [ coordinates,setCoordinates] = useState({});
  const [dist,setBound] = useState(2);
  const [bounds,setBounds] = useState({});



    useEffect(()=> {

      navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}}) =>{

          setCoordinates({lat:latitude,lng:longitude})



      })



      console.log(coordinates.lat," this the object", coordinates.lng,'this is the long object')



    })


    useEffect(() =>{


      


      console.log(coordinates,bounds)

      getPlacesData(bounds.sw, bounds.ne) .then( data =>{

          setPlaces(data)
          console.log(data,"from app js");
            
         })
         


    },[coordinates,bounds])

  return (
  <>

  <CssBaseline />
  <Header />
  <Grid  container spacing={3} style={{width:'100%'}}>

    <Grid item={true} xs={12} md={4}>
      <List places={places}/>
   </Grid>

 

    <Grid item={true} xs={12} md={8}>
      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
      />

     </Grid>
  </Grid>
  </>
  );
}

export default App;
