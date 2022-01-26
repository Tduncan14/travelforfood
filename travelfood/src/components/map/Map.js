import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper,Typography,useMediaQuery} from '@material-ui/core';
import Rating from '@material-ui/lab';
import LocationonOutlinedIcon from '@material-ui/icons/LocationOnOutlined';


import useStyles from './style';



const Map  = ({setCoordinates,setBound,coordinates,setBounds}) => {

  const classes= useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');


  const coordinate = {lat:40.730610 , lng:74.0060};

  return (
      <div className={classes.mapContainer}>
        <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyCko80If60ir6ONePlXrQAmliysyZ_NIrE'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={5}
        margin={[50,50,50,50]}
        options={''}
        onChange={(e) => { 
          console.log(e,'this is the event')
          setCoordinates({lat:e.center.lat, lng:e.center.lng})
          setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw})
        }}
        onChildClick={''}
        >

        </GoogleMapReact>
      </div>
  )





}


export default Map;