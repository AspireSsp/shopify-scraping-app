require('dotenv').config({path: './.env'})

// const api = process.env.API_KEY
// console.log(api);

const axios = require('axios');

const getProducts = async() =>{
  axios({
    method: 'get',
    url : 'https://messoldtech-test.myshopify.com/admin/api/2021-07/products.json',
    headers : {
      'Content-Type' : 'application/json',
      'X-Shopify-Access-Token' : process.env.ADMIM_API_ACCESS_TOKEN,
    },
  })
  .then((response)=> {
    console.log(response.data);
  })
  .catch((err)=>{
    console.log(err);
  })
}

getProducts();