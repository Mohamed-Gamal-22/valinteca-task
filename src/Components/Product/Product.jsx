import React from 'react';

export default function Product({product, addToCard, removeProduct}) {

  return <>     
        <div className="col-md-3">
            <div className="product">
                <div className="card">
                    {/* <img src="..." className="card-img-top" alt="..."/> */}
                    <div className="card-body">
                        <h5 className="card-title">Name : {product.pname}</h5>
                        <p className="card-text">Price : {product.pprice}</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        {/* <div onClick={() => addToCard(product)} className="btn btn-success me-2">{product.addToCard ? "remove" : "add to card"}</div> */}
                        {!product.addToCard ? <div onClick={() => addToCard(product)} className="btn btn-success me-2">add to card</div> :<div onClick={() => removeProduct(product)} className="btn btn-danger me-0">remove from card</div> }
                        <div className="btn">
                            <button type="button" data-bs-toggle="modal" data-bs-target={`#mo${product.id}`} className='btn btn-dark'>
                                quick view
                            </button>

                            <div className="modal fade" id={`mo${product.id}`}data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby={product.id} aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id={product.id}>{product.pname}
                                    </h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                   <p>Info about : <span className='fw-bold'>{product.pname}</span></p>
                                   <p>Price is : {product.pprice}</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    {/* <button type="button" className="btn btn-primary">Understood</button> */}
                                </div>
                                </div>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
