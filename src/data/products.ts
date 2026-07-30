import p1 from "/logo.png"
export interface Product {
  id:number;
  img: string;
  name:string;
  desc:string;
}

const products: Product[] = [
  {
    id:0,
    img: p1,
    name:"product1",
    desc:"product 1 desc"
  },
];

export default products;