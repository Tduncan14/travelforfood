import React from 'react';
import {Box,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip, PlaceSharp} from '@material-ui/core';
import LocationOnOutlined from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';


import useStyles from './style';





const PlaceDetails = ({place}) => {

    const classes = useStyles()



return(
    <Card elevation={6}>
        <CardMedia
          style={{height:350}}
          image ={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          title={place.name}/>

          <CardContent>
              <Typography gutterBottom variant="h5">{place.name}</Typography>
              <Box display='flex'  justifyContent="space-between">
                  <Typography varient ="subtitle1">Price</Typography>
                  <Typography varient ="subtitle1">{place.price_level}</Typography>

              </Box>

              <Box display='flex'  justifyContent="space-between">
                  <Typography varient ="subtitle1">Ranking</Typography>
                  <Typography varient ="subtitle1">{place.ranking}</Typography>

              </Box>
          </CardContent>


    </Card>
)


}



export default PlaceDetails