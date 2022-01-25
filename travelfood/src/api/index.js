import axios from 'axios';


const URL ='https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'


const options = {


  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
    // limit: '30',
    // child_rm_ages: '7,10',
    // currency: 'USD',
    // subcategory: 'hotel,bb,specialty',
    // zff: '4,6',
    // hotel_class: '1,2,3',
    // amenities: 'beach,bar_lounge,airport_transportation',
    // adults: '1'
  },
  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '88fdfc2359mshc5b93de2215c555p155513jsncbe4508c2e45'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});



const getPlacesData = async () => {



    try{

        const {data:{data}} = await axios.get(URL,options);

        const response = await axios.get(URL,options);


        console.log(response,'this is the data')


        return data
 
    }



    catch{

        return 'hello'

    }





}

export default getPlacesData