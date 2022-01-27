import axios from 'axios';


const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'


// const options = {
  
 
//   params: {
//     latitude: '12.91285',
//     longitude: '100.87808',
//     limit: '30',
//     currency: 'USD',
//     distance: '2',
//     open_now: 'false',
//     lang: 'en_US'
//   },
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': '88fdfc2359mshc5b93de2215c555p155513jsncbe4508c2e45'
//   }
// };


// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });


// const options = {
//   method: 'GET',
//   url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
//   params: {
//     bl_latitude: sw.lat,
//     tr_latitude: ne.lat,
//     bl_longitude: sw.lng,
//     tr_longitude: ne.lng,
//   },
//   headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': '88fdfc2359mshc5b93de2215c555p155513jsncbe4508c2e45'
//   }
// };

// 

const url= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundarya';

const getPlacesData = async (sw,ne) => {



    try{

        // const {data: {data}} = await axios.get(url,
        //   {
        //     params: {
        //       latitude: '12.91285',
        //       longitude: '100.87808',
        //       limit: '30',
        //       currency: 'USD',
        //       distance: '2',
        //       open_now: 'false',
        //       lang: 'en_US'
        //     },
        //     headers: {
        //       'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        //       'x-rapidapi-key': '88fdfc2359mshc5b93de2215c555p155513jsncbe4508c2e45'
        //     }
        //   }
          
        // );

        


        const {data:{data}}= await axios.get(url,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '88fdfc2359mshc5b93de2215c555p155513jsncbe4508c2e45'
          }});


       


        return data
    
    }



    catch(error){

        console.log('hello',error)
    }





}

export default getPlacesData