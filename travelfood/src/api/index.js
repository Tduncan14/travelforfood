import axios from 'axios';


const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng'


const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
  params: {
    latitude: '12.91285',
    longitude: '100.87808',
    limit: '30',
    currency: 'USD',
    distance: '2',
    open_now: 'false',
    lang: 'en_US'
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

        const {data: {data}} = await axios.get(URL,options);

        const response = await axios.get(URL,options);


        console.log(response,'this is the data')


        return data
 
    }



    catch{

        return 'hello'

    }





}

export default getPlacesData