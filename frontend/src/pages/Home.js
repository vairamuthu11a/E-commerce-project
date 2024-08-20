import { Fragment, useEffect, useState } from "react";
import ProductsCard from "../component/ProductsCard";
import { useSearchParams } from "react-router-dom";


export function Home() {

   const [products, setProducts] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams(); 

   useEffect(() =>{
    fetch(process.env.REACT_APP_URL+ "/products?"+searchParams)
    .then(res => res.json())
    .then(res => setProducts(res.products))
   }, [searchParams])
  

    return <Fragment>

        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
            <div className="row">
                {products.map(product => <ProductsCard product={product} />)}
                

            </div>
        </section>





    </Fragment>
}