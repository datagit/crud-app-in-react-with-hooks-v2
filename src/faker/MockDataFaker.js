const faker = require('faker');
// https://github.com/marak/Faker.js/
export const UserData = [...Array(20)].map((x, i) => {
    return {
        id: ++i,
        name: faker.name.findName(),
        username: faker.internet.userName(),
    };
});