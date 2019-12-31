const faker = require('faker');
const bcrypt = require('bcryptjs');
require('dotenv').config();


const cuisines = ['Fusion cuisine', 'Haute cuisine', 'Note by Note cuisine', 'Nouvelle cuisine', 'Vegan cuisine', 'Vegetarian cuisine', 'Cuisine of New York', 'African cuisine', 'Chinese cuisine', 'French cuisine', 'Soul food', 'Cuisine of Hawaii', 'Indian cuisine', 'Caribbean cuisine', 'Japanese cuisine', 'Turkish cuisine', 'Greek cuisine', 'Cajun cuisine', 'German cuisine', 'Italian cuisine', 'British cuisine', 'Mexican cuisine', 'Moroccan cuisine', 'Lebanese cuisine', 'Mediterranean cuisine', 'American cuisine'];

Array.prototype.randomCuisine = function(){
  return this[Math.floor(Math.random() * this.length)];
}

const createFakeUser = () => ({
  password: bcrypt.hashSync(process.env.USER_PASSWORD, 8),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  cuisine_style: cuisines.randomCuisine(),
  address: faker.address.streetAddress(),
  zip: faker.address.zipCode(),
  website: faker.internet.domainName(),
  bio: faker.lorem.paragraph(),
  image: faker.image.avatar(),
  linkedin: faker.internet.url(),
  twitter: faker.internet.userName(),
})

exports.seed = function(knex, Promise) {
  // Users
  const fakeUsers = [];
  const desiredFakeUsers = 50;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users')
        .insert(fakeUsers);
    });
};

