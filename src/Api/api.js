import { API_ROUTER } from "../Routers/apiRouters";
import { API_BASE_URL } from "../url/URL";

// Signup API
export const SignupApi = async (signupData) => {
  try {
    const header = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signupData),
    };
    const res = await fetch(`${API_BASE_URL}${API_ROUTER.signup}`, header);
    
    // Check response status
    if (!res.ok) {
      throw new Error(`Signup failed: ${res.status} ${res.statusText}`);
    }

    const resData = await res.json();
    return resData;
  } catch (err) {
    console.error("Signup API Error:", err);
    throw err;
  }
};

// Login API
export const LoginApi = async (loginData) => {
  try {
    const header = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    };
    const res = await fetch(`${API_BASE_URL}${API_ROUTER.login}`, header);

    // Check response status
    if (!res.ok) {
      throw new Error(`Login failed: ${res.status} ${res.statusText}`);
    }

    const resData = await res.json();
    return resData;
  } catch (err) {
    console.error("Login API Error:", err);
    throw err;
  }
};

// Get All Slider API
export const getAllSliderApi = async () => {
  try {
    const header = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const res = await fetch(`${API_BASE_URL}${API_ROUTER.getAllSlider}`, header);
    
    // Check response status
    if (!res.ok) {
      throw new Error(`Fetching sliders failed: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Get All Slider API Error:", error);
    throw error;
  }
};

export const getAllProductApi = async() => {
  try {
    
      const res = await fetch(`${API_BASE_URL}${API_ROUTER.getAllProduct}/?pageno=1`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });

      // if (!res.ok) {
      //     throw new Error(`HTTP error! Status: ${res.status}`);
      // }

      const resObjData = await res.json();
      console.log("hello",resObjData)
      return resObjData;

  } catch (err) {
      console.error('Error fetching products:', err);
      return { status: 'failed', message: err.message }; // Return an object to handle the error gracefully
  }
};

export const getSingleProductApi = async(id)=>{
  try{
   const header={
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
   }
   const res = await fetch(`${API_BASE_URL}${API_ROUTER.SingleProduct}/${id}`,header)
   const resObjData = await res.json()
   return resObjData

  }
  catch(error){
    console.log(error)
  }
}
