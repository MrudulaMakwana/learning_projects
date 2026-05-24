import React from "react";
import ProductItem from "./components/productItem";

export default function Index() {
  const dummyData = ["product1", "product2", "product3"];

  return (
    <>
      <h1 style={{padding:"20px",fontSize:'28px'}}>E-commerce</h1>
      {/* <ProductItem/>   */}

      {/* {dummyData.map((product)=>{
        return <ProductItem product={product} />
      })} */}

      <ul>
        {dummyData.map((product, inx) => {
          return (
            <li key={inx}>
              <ProductItem product={product} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
