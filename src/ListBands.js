import React from "react";
import Band from "./Band";

const ListBand = ({bands,changeCurrentBand})=>{
 const allbands = bands.map(band=>{
  return(
  
   <div className="col-6">
     <Band band={band} changeCurrentBand={changeCurrentBand}/>
   </div>
 
  )
 })


 return(
  <div className="container-fluid m-4">
   <div className="row">
    <div className="col-10 offset-1">
     <div className="row">
       {allbands}
     </div>
    </div>
   </div>
  </div>
 )
}
export default ListBand;