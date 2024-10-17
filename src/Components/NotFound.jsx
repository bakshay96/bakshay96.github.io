import { position } from "@chakra-ui/react";
import React from "react";

export const NotFound = () => {
  return (
    <div style={{
      marginTop:"5px",
      position:"fixed",
      zIndex:"98",
      width:"100%",
      textAlign:"center"
    }}>
      <div
        style={{
          margin:"10px",
          background:"yellow",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <marquee  direction="left"
            
            behavior="alternat" style={{border:"red"}} >
  <marquee behavior="alternate"> 
  
        <h1 style={{color:"red",padding:"0px", fontSize:"20px", marginTop:"50px",}}>Page is under Maintanance...We will be comming back soon..!</h1>
   </marquee>
</marquee>

        
        
      
      </div>
    </div>
  );
};
