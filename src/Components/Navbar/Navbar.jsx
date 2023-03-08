import React from 'react';
import style from "./Navbar.module.css";

export default function Navbar({allProducts, removeProduct}) {
  return (
    <>
    <nav className="navbar mb-4 navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <span className="navbar-brand">Navbar</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item text-white">
            
        </li>
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fs-4 fa-solid fa-cart-shopping"></i>
            <span className='text-primary'>{allProducts ? allProducts.filter((product) => product.addToCard === true).length : ""}</span>
          </span>
          <ul className={`dropdown-menu ${style.dropmenu} bg-dark`} aria-labelledby="navbarDropdown">
            <h4 className='text-center text-capitalize text-white'>all products</h4>
            {allProducts ? allProducts.filter((product) => product.addToCard === true).map((product, index) => <li key={index} className='dropdown-item'><div className="card">
                    {/* <img src="..." className="card-img-top" alt="..."/> */}
                    <div className="card-body">
                        <h5 className="card-title">Name : {product.pname}</h5>
                        <p className="card-text"> Price : {product.pprice}</p>
                        <div onClick={() => removeProduct(product)} className="btn btn-danger">remove product</div>
                    </div>
                </div></li>) : ""}
            {/* <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
