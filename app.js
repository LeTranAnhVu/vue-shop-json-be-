const fs = require('fs');
const Faker = require('faker');


const wfile = fs.createWriteStream('./product.json');

// console.log('faker aoi', Faker.image.image());

/*
* json schema
* id: Number
* name: string
* image: string - url
* price: number
* */

function jsonFactory(numbProducts){
  let data= {
    products: []
  }
  for (let i = 0; i < numbProducts; i++){
    const json = {
      id : i,
      name: Faker.commerce.product(),
      image: Faker.image.image(),
      price: Faker.commerce.price(),
    }
    data.products.push(json);
  }


  let jsonData = JSON.stringify(data);
  wfile.write(jsonData,function(){
    console.log('json is ready');
  });
}


jsonFactory(7000);
