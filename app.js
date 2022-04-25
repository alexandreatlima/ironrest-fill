const data = require("./data");
const axios = require("axios");

const API_COLLECTION_NAME = "COLOQUE O NOME DA SUA COLEÇÃO AQUI!";

async function postAPI(item) {
  await axios.post(
    `https://ironrest.herokuapp.com/${API_COLLECTION_NAME}`,
    item
  );
}

for (let i = 0; i < data.length; i++) {
  postAPI(data[i]);
}
