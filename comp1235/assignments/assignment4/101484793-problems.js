"use strict";

// Async Function 1: Random Number
async function getRandomNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 5) + 1;
      resolve(randomNumber);
    }, 500);
  });
}

// Async Function 2: Get City Data
async function getCityData(city) {
  const url = `https://geocode.xyz/${city}?json=1`;
  const response = await fetch(url);
  const data = await response.json();

  if (!data.longt) {
    throw new Error(`Could not get data for ${city}`);
  }

  return data.longt;
}

// Async Function 3: Fetch Product
async function fetchProduct(id) {
  const url = `https://dummyjson.com/products/${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not get product ${id}`);
  }

  const data = await response.json();
  return data.title;
}

// Async Function 4: Search Store Price
async function searchStorePrice(product_name) {
  const url = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not get products ${product_name}`);
  }

  const data = await response.json();
  const product = data.find(item => item.name.toLowerCase() === product_name.toLowerCase());

  if (!product) {
    throw new Error(`Product ${product_name} not found`);
  }

  return product.price;
}

// Async Function 5: Star Wars API
async function getStarWarsCharacters() {
  const url = "https://swapi.dev/api/people/";
  const response = await fetch(url);
  const data = await response.json();

  const characters = {};

  data.results.forEach(character => {
    characters[character.name] = character.url;
  });

  return { characters };
}