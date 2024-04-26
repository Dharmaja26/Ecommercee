import React from "react";
function Productkid(){


        
    return (
        <>
        <div  style={{backgroundColor:'beige',display:"flex",alignContent:'center', gap:'20px'}}> 
        <img src='mb3.png' style={{width:'80px'}}/>
        {/* <input type='radio'></input> */}
        <select  style={{width:'100px',height:"50px"}}>
            <option  value='none' selected disabled hidden>SORT BY</option>
            <option style={{maxWidth:'100px'}} >Recommended</option>
            <option>Newest</option>
            <option >Highest Price</option>
            <option>Lowest Price</option>
        </select>
        <select  style={{width:'100px',height:"50px"}}>
            <option  value='none' selected disabled hidden >COLOR</option>
            <option  height='50px' width='150px'style={{backgroundColor:'red'}}>Red</option>
            <option style={{backgroundColor:'green' }}>Green</option>
            <option style={{backgroundColor:'yellow'}}>Yellow</option>
            <option  style={{backgroundColor:'Beige'}}>Beige</option>
            <option style={{backgroundColor:'black', color:'white' }}>Black</option>
            <option style={{backgroundColor:'brown'}}>Brown</option>
            <option  style={{backgroundColor:'gold'}}>Gold</option>
            <option style={{backgroundColor:'grey' }}>Grey</option>
            <option style={{backgroundColor:'orange'}}>Orange</option>
            <option  style={{backgroundColor:'blue'}}>Blue</option>
            <option style={{backgroundColor:'aqua' }}>Aqua</option>
            <option style={{backgroundColor:'white'}}>White</option>
            <option  style={{backgroundColor:'greenyellow'}}>Greeny Yellow</option>
        </select>
        <select  style={{width:'100px',height:"50px"}}>
            <option  value='none' selected disabled hidden >SIZE</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>Freesize</option>
            </select>
        </div>
        <div style={{justifyContent:'space-around',display:'flex'}}>
      
      <a href="#">
      <img src='k1.jpg' style={{height:'500px'}}/>
      </a>
      <a>
      <img src='k2.jpg' style={{height:'500px'}}/>
      </a>
      <a href="#">
      <img src='k3.jpg' style={{height:'500px'}}/>
      </a>
      <a href="#">
      <img src='k4.jpg' style={{height:'500px'}}/>
      </a>
      </div>
        
        
        </>
      
    );
  };
  
  export default Productkid;