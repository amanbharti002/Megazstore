import  './ImageSlider.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { getAllSliderApi } from "../../Api/api";
import { APi_IMAGE_URL } from "../../url/URL";
import Carousel from 'react-bootstrap/Carousel';

export default function ImageSlider() {
  const [slider, setSlider] = useState([]); // Initialize as an empty array

  async function SliderCall(){
    try {
      const res = await getAllSliderApi();
      // console.log(res)
      setSlider(res);
    } catch (error) {
      console.error("Error fetching slider data: ", error);
    }
  }

  useEffect(() => {
    SliderCall();
  }, []);

  return (
    <div className="carousel">
      <Carousel data-bs-theme="dark">
        {slider?.data?.map((e, i) =>(
          
          <Carousel.Item key={i}>
            {/* { console.log(e.image)} */}
            <img
              className="d-block w-100 h-10"              src={`${APi_IMAGE_URL}${e.image}`}
              alt="img"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}