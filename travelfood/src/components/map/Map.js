import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper,Typography,useMediaQuery} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import LocationonOutlinedIcon from '@material-ui/icons/LocationOnOutlined';








import useStyles from './style';



const Map  = ({setCoordinates,setBound,coordinates,setBounds,places,setChildClicked}) => {

  const classes= useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)');


  


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
          
          setCoordinates({lat:e.center.lat, lng:e.center.lng})
          setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw})
        }}
        onChildClick={(child) => setChildClicked(child)}
        >

          {places?.map((place,i) => (
              <div

              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}


              >

                {
                  !isDesktop ? (
                    <LocationonOutlinedIcon  color="primary" fontSize="large"/>
                  ) :
                  (
                    <Paper evelation={3}  className={classes.paper}>
                      <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                      {place.name}
                      </Typography>

                        <img className={classes.pointer}
                          src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                          alt={place.name}
                        />

                       <Rating size="small"  value={Number(place.rating)} readOnly />
                  
                    </Paper>
                  )
                }

              </div>

          ))}

        </GoogleMapReact>
      </div>
  )





}


export default Map;