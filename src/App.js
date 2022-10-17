import React from "react";
import "./style.css";
import Header from "./header";
import Cards from "./cards"
import Elements from "./Datas";

export default function App() { 
  const items = Elements.map((item)=>{
    return(
      <div className ='col-4'>
       <Cards  {...item}/>
      </div>
    )
  } )
  return(
 <div className="text-center">

 <Header />
 {items}
 </div>
)
}

