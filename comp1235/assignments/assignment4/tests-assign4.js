"use strict";

const chai = window.chai;
const expect = chai.expect;

// Assuming you have imported your functions from 101484793-problems.js
const {
    getRandomNumber,
    getCityData,
    fetchProduct,
    searchStorePrice,
    getStarWarsCharacters
} = window["101484793-problems"]; // Using your student number

describe('Async Functions', () => {

    describe('getRandomNumber()', () => {
        it('should return a random number between 1-5', async () => {
            const number = await getRandomNumber();
            expect(number).to.be.within(1, 5);
        });
    });

    describe('getCityData(city)', () => {
        it('should return the longitude of the city', async () => {
            const longitude = await getCityData("Toronto");
            expect(longitude).to.be.closeTo(-79.41946, 0.01);
        });
    });

    describe('fetchProduct(id)', () => {
        it('should return the product title for a given product id', async () => {
            const productName = await fetchProduct(1);
            expect(productName).to.equal("iPhone 9");
        });
    });

    describe('searchStorePrice(product_name)', () => {
        it('should return the price of the product', async () => {
            const price = await searchStorePrice("chicken noodle soup");
            expect(price).to.equal(1.89);
        });
    });

    describe('getStarWarsCharacters()', () => {
        it('should return the characters with their URLs from Star Wars API', async () => {
            const characters = await getStarWarsCharacters();
            expect(characters).to.deep.equal({
                characters: {
                    "R2-D2": "https://swapi.dev/api/people/3/",
                    "C-3PO": "https://swapi.dev/api/people/2/",
                    "Luke Skywalker": "https://swapi.dev/api/people/1/"
                }
            });
        });
    });

});