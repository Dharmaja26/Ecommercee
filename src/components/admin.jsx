import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Frame from 'react-frame-component';
function Admin(){
  return (
    <>
    <div style={{backgroundColor:'beige'}}>
    <div style={{display:'flex',justifyContent:'space-evenly',color:'black',flexDirection:'row',width:'1450px',padding:'20px'}}>
   <input type='text' name='search' placeholder='search' style={{height:'30px'}}/>
    <img src='mb3.png' style={{width:'100px'}}/>
    <h5><FaRegUser style={{fontSize:'20px'}} />
          Sign in
    </h5>
     <h5> <FaRegHeart style={{fontSize:'20px'}} /> 
           Favorites
    </h5>
    <h5> <AiOutlineShoppingCart style={{fontSize:'20px'}}  />
          Cart
   </h5>
    </div>
    </div>
     <div style={{display:'flex',justifyContent:'center',color:'black',flexDirection:'column',width:'1450px',padding:'20px'}}>
     <select  style={{width:'200px',height:"50px"}}>
            <option  value='none' selected disabled hidden >Ecommerce</option>
              <option>Add Product</option>
              <option>Product List</option>
            </select>
     <select  style={{width:'200px',height:"50px"}}>
            <option  value='none' selected disabled hidden >User</option>
              <option>All User</option>
              <option>Add New User</option>
              <option>Login</option>
              <option>Sign Up</option>
            </select>
    <select  style={{width:'200px',height:"50px"}}>
            <option  value='none' selected disabled hidden >Order</option>
              <option>Order List</option>
              <option>Order Detail</option>
              <option>Order Tracking</option>
            </select>
    
     <frameset rows="20%, 80%">
     </frameset>
   </div>

   </>
  );
};

export default Admin;