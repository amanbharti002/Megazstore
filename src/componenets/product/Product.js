import { useEffect, useState } from "react";
import { getAllProductApi } from "../../Api/api";
import { APi_IMAGE_URL } from "../../url/URL";
import './Product.css';
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Product() {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const navigate = useNavigate();

  // Function to fetch product data
  async function ProductCall() {
    try {
      const res = await getAllProductApi();
      console.log(res)
      if (res.status === 'success') {
       
        setProducts(res.data); // Assuming 'data' contains the product array
      }

    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  // Fetch data when the component mounts
  useEffect(() => {
    ProductCall();
  }, []);

  return (
    <div className="proImg">
      {products.length > 0 ? (
        products.map((product, i) => (
          <Button 
            onClick={() => navigate(`/description/${product.ProductTitle}`)} // Pass product ID
            className="btn" 
            key={i}
          >
            <div>
              <img
                className="d-block w-300"
                src={`${APi_IMAGE_URL}${product.ProductImage}`}
                alt={`Product ${product.ProductTitle}`}
              />
              <h1>{product.ProductTitle}</h1>
              <span>Rs </span>
              <p>{product.ProductPrice}</p>

            </div>

          </Button>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}