var Product = (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.print = function () {
        console.log(this.name);
        console.log(this.price);
    };
    return Product;
}());
var per1 = new Product("iPhone7 Plus", 70000);
per1.print();
//# sourceMappingURL=apps.js.map