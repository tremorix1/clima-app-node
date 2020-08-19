const axios = require('axios');

const getLatLng = async(dir) =>{

  const encodedUrl = encodeURI(dir);
  const instance = axios.create({
    baseURL: `https://geocode.xyz/?locate=location?city=${encodedUrl }&auth=317297500442862374288x37124&json=1`
  });

  const resp = await instance.get();
  if (resp.data.length === 0){
    throw new Error(`No hay resultados para: ${ dir }`);
  }

const data = resp.data;
const direccion = `${ data.standard.city }, ${ data.standard.countryname }`;
const lat = data.latt;
const lng = data.longt;
return {
  direccion,
  lat,
  lng

}
}

module.exports = {
  getLatLng
}
