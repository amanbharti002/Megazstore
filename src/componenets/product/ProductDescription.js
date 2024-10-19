import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProductApi, getSingleProductApi } from "../../Api/api";
import { APi_IMAGE_URL } from "../../url/URL";
import './Product.css';




export default function ProductDescription() {
  const { name } = useParams()
  const [product, setProduct] = useState();
  async function callfunction() {
    const res = await getSingleProductApi(name)
    if (res.status === 'success') {
      setProduct(res.data)
    }
  }
  const x = product.ProductDescription.split(".")
  useEffect(() => {
    callfunction()

  }, [])



  return (

    <>

      <div className="descrip">
      <div className="part1">
        <img
          className="image"
          src={`${APi_IMAGE_URL}${product?.ProductImage}`}
          alt={`Product ${product?.ProductTitle}`}

        />

        </div>
       

        <div className="part2">
          <h1>ProductDescription</h1>
        {/* <p>{product?.ProductDescription}</p> */}
        <ul>
          {x?.map((e,i)=><li key={i}>{e}</li>)}
        </ul>
        </div>
      </div>
      <div>
          <button onClick={()=>console.log(product._id)}>Addb</button>
        </div>
    </>
  )
}