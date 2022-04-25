const data = require("./data");
const axios = require("axios");

const API_COLLECTION_NAME = "coloque o nome da sua coleção aqui";

for (let i = 0; i < data.length; i++) {
  axios.post(`https://ironrest.heroku.com/${API_COLLECTION_NAME}`, data[i]);
}
