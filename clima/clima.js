const axios = require('axios');



const getClima = async(lat,lng) => {

const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=e34bcc288a5ee5516c1f57d2e332d500&units=metric`)
return resp.data.main.temp;
}


module.exports = {
  getClima
}
