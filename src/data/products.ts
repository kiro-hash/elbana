import p1 from "../assets/products/bannap (1).png";
import p2 from "../assets/products/bannap (2).png";
import p3 from "../assets/products/bannap (3).png";
import p4 from "../assets/products/bannap (4).png";
import p5 from "../assets/products/bannap (5).png";
import p6 from "../assets/products/bannap (6).png";
import p7 from "../assets/products/bannap (7).png";
import p8 from "../assets/products/bannap (8).png";

export interface Product {
  id: number;
  img: string;
  name: string;
  desc: string;
  group?: string;
  color?: string;
}

const products: Product[] = [
  // ===== Main colored product =====
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
    group: "coloredRim",
    color: "white",
  },
  {
    id: 2,
    img: p3,
    name: "p3",
    desc: "p3desc",
    group: "coloredRim",
    color: "blue",
  },
  {
    id: 3,
    img: p4,
    name: "p4",
    desc: "p4desc",
    group: "coloredRim",
    color: "black",
  },
  {
    id: 4,
    img: p1,
    name: "p5",
    desc: "p5desc",
    group: "coloredRim",
    color: "red",
  },
  {
    id: 5,
    img: p7,
    name: "p7",
    desc: "p7desc",
    group: "coloredRim",
    color: "gray",
  },

  // ===== Other products =====
  {
    id: 6,
    img: p6,
    name: "p6",
    desc: "p6desc",
  },
  {
    id: 7,
    img: p8,
    name: "p8",
    desc: "p8desc",
  },
];

export default products;
