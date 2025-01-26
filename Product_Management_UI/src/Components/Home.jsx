import React, { useEffect,useState } from 'react'
import Productservice from '../Service/Productservice';
import { NavLink } from 'react-router-dom';
import 'animate.css';

function Home() {

  const [productList, setproductList] = useState([]);

   const [msg, setmsg] = useState("")

  useEffect(() => {
     init()
  },[])

  const init = () =>
  {
    Productservice.getAllProduct().then((res) =>{
      setproductList(res.data)
  }).catch((error) => {
    console.log(error);  
  })
  }

  const deleteProduct = (id) =>{
    Productservice.deleteProduct(id).then((res) => {
          setmsg("Delete Successfully")
          init()
    }).catch((error) => {
      console.log(error);
    })
  }

  const updateProduct = (id) =>{
    Productservice.deleteProduct(id).then((res) => {
          setmsg("Delete Successfully")
    }).catch((error) => {
      console.log(error);
    })
  }
  

  return (
   <>
      <div className="container mx-auto mt-3">
  <div className="row">
    <div className="col-md-12">
      <div className="card shadow-lg rounded-lg animate__animated animate__fadeIn">
        <div className="card-header text-3xl text-center py-4 bg-gray-200 text-gray-800">
          All Product List

          {
                msg &&
                  <p className='fs-4 text-center text-success'>{msg}</p>
              }
        </div>
        <div className="card-body p-6">
          <div className="relative overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full table-auto text-sm text-left text-gray-500">
              <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
                <tr className="animate__animated animate__fadeIn animate__delay-1s">
                  <th className="px-6 py-3 border-b border-gray-300 rounded-tl-lg">Sl No.</th>
                  <th className="px-6 py-3 border-b border-gray-300">Product Name</th>
                  <th className="px-6 py-3 border-b border-gray-300">Description</th>
                  <th className="px-6 py-3 border-b border-gray-300">Price</th>
                  <th className="px-6 py-3 border-b border-gray-300">Status</th>
                  <th className="px-6 py-3 border-b border-gray-300 rounded-tr-lg">Action</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((p, num) => (
                  <tr
                    key={num}
                    className="hover:bg-gray-50 animate__animated animate__fadeIn animate__delay-2s"
                  >
                    <td className="px-6 py-4 border-b border-gray-300">{num + 1}</td>
                    <td className="px-6 py-4 border-b border-gray-300">{p.productName}</td>
                    <td className="px-6 py-4 border-b border-gray-300">{p.description}</td>
                    <td className="px-6 py-4 border-b border-gray-300">{p.price}</td>
                    <td className="px-6 py-4 border-b border-gray-300">{p.status}</td>
                    <td className="px-6 py-4 border-b border-gray-300 flex gap-2">

                      <NavLink to= {'editProduct/'+p.id}   className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                      Edit
                      </NavLink>
                      
                      <button
                        onClick={() => updateProduct(p.id)}
                        className="btn bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}


export default Home;