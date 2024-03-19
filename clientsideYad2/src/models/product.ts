//import Owner from "./owner";

class Product {
  id: number;
  name: string = '';
  publishDate: Date;
  image: string = '';
  price: number;
  ownerId: number;
 // owner: Owner;

  constructor(
    id: number = 0,
    name: string = '',
    publishDate: Date = new Date(),
    image: string = '',
    price: number = 0,
    ownerId: number = 0,
    //owner: Owner = new Owner()
  ) {
    this.id = id;
    this.name = name;
    this.publishDate = publishDate;
    this.image = image;
    this.price = price;
    this.ownerId = ownerId;
   // this.owner = owner;
  }
}

export default Product;
