var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=942f5f3e72f04b781a34bfa6a8d3e40c';
//942f5f3e72f04b781a34bfa6a8d3e40c

module.exports = {

  getTemp: function(location){
    var encodingLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=?${encodingLocation}`;

    return axios.get(requestUrl).then(function(res){
      // if(res.data.cod && res.data.cod==='200'){
      //   return res.data.main.temp;
      // }
      // else{
      //   throw new Error(res.data.message);
      //}
      
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(res){
        //debugger;
      throw new Error(res.response.data.message);
    });
  }
}
