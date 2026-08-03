import p1 from "../assets/gnt.png"
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
    name:"p1",
    desc:"p1desc"
  },
  {
    id:1,
    img: p1,
    name:"p2",
    desc:"p2desc"
  },
];

export default products;