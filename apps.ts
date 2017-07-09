class Product
{
private  name :string;
protected price : number;

constructor(name :string, price : number) { this.name = name;
this.price = price;
}
print():void {
console.log(this.name);
console.log(this.price);
}
}
var per1 = new Product("iPhone7 Plus", 70000);
 per1.print();