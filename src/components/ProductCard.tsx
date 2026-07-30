import "./styles/ProductCard.css"

interface props{
    img:string;
    name:string;
    desc:string
}

const ProductCard = ({img,name,desc}:props) => {
  return (
    <div className="productcard">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h4>{desc}</h4>
    </div>
  )
}

export default ProductCard
