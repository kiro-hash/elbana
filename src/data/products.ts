import p1 from "../assets/products/bannap (1).png";
import p2 from "../assets/products/bannap (2).png";
import p3 from "../assets/products/bannap (3).png";
import p4 from "../assets/products/bannap (4).png";
import p5 from "../assets/products/bannap (5).png";
import p6 from "../assets/products/bannap (6).png";
import p7 from "../assets/products/bannap (7).png";
export interface Product {
  id: number;
  img: string;
  name: string;
  desc: string;
}

const products: Product[] = [
  {
    id: 0,
    img: p5,
    name: "p1",
    desc: "p1desc",
  },
  {
    id: 1,
    img: p2,
    name: "p2",
    desc: "p2desc",
  },
  {
    id: 1,
    img: p3,
    name: "p3",
    desc: "p3desc",
  },
  {
    id: 1,
    img: p4,
    name: "p4",
    desc: "p4desc",
  },
  {
    id: 1,
    img: p1,
    name: "p5",
    desc: "p5desc",
  },
  {
    id: 1,
    img: p7,
    name: "p7",
    desc: "p7desc",
  },
  {
    id: 1,
    img: p6,
    name: "p6",
    desc: "p6desc",
  },
  
];

export default products;
