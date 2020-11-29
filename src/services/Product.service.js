const faker = require('faker');
let Product = require('../entities/Product.class');
class ProductService {
    getAll() {
        let products =
            [...Array(20)].map((x, i) => {
                return new Product('pid-' + i, faker.name.findName(), faker.commerce.price(), faker.image.imageUrl());
            });
        return products;
    }
    find(id) {
        for (let product of this.getAll()) {
            if (id === product.id) {
                return product;
            }
            return null;
        };
    }

}
module.exports = ProductService;