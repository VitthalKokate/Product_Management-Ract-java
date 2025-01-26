import React from 'react';
import { useState } from 'react';
import Productservice from '../Service/Productservice';

function AddProduct() {

  const [product, setproduct] = useState({
    productName:"",
    description:"",
    price:"",
    status:""
  })

  const [msg, setmsg] = useState("")

  const handleChange = (e) =>{
    const value = e.target.value;
    setproduct({...product, [e.target.name]:value})
  }

  const ProductRegister = (e) =>{
    e.preventDefault();

    Productservice.saveProduct(product).then((res) =>{
      console.log("Product Added Successfully");
      setmsg("Product Added Successfully")
      setproduct({
        productName:"",
        description:"",
        price:"",
        status:""
      });
    }).catch((err)=> {
         console.log(err);
    })
    

   
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-lg p-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-xl shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl animate-fadeIn">
          <div className="text-4xl font-bold text-white text-center mb-8">Add Product</div>
              {
                msg &&
                  <p className='fs-4 text-center text-success'>{msg}</p>
              }


          <form onSubmit={(e)=> ProductRegister(e)}>
            <div className="mb-6">
              <label className="block text-white font-medium">Product Name</label>
              <input
                type="text"
                name="productName"
                className="w-full mt-2 p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                placeholder="Enter product name"
                onChange={(e) => handleChange(e)}
                value={product.productName}
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-white font-medium">Product Description</label>
              <input
                type="text"
                name="description"
                className="w-full mt-2 p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                placeholder="Enter product description"
                onChange={(e) => handleChange(e)}
                value={product.description}
              />
            </div>

            <div className="mb-6">
              <label className="block text-white font-medium">Product Price</label>
              <input
                type="text"
                name="price"
                className="w-full mt-2 p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                placeholder="Enter product price"
                onChange={(e) => handleChange(e)}
                value={product.price}
              />
            </div>

            <div className="mb-6">
              <label className="block text-white font-medium">Product Status</label>
              <input
                type="text"
                name="status"
                className="w-full mt-2 p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
                placeholder="Enter product status"
                onChange={(e) => handleChange(e)}
                value={product.status}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 px-6 mt-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
