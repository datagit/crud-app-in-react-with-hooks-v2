test('current', () => {
    let ProductService = require('../services/Product.service');
    let service = new ProductService();
    console.log(service.getAll());
});