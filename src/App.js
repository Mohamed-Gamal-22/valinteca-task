import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Product/Product';
import Modal from './Components/Modal/Modal';

function App() {
  const [allProducts, setAllProducts] = useState([
    {id : 0, pname : "Gold Coin", pprice : "112.55", pimage : "gold-coin.png", addToCard : false},
    {id : 1, pname : "keyboard", pprice : "50.12", pimage : "gold-coin.png", addToCard : true},
    {id : 2, pname : "maouse", pprice : "30.27", pimage : "gold-coin.png", addToCard : true},
    {id : 3, pname : "screen", pprice : "2000", pimage : "gold-coin.png", addToCard : false},
    {id : 4, pname : "labtop", pprice : "9500", pimage : "gold-coin.png", addToCard : false},
    {id : 5, pname : "ipad", pprice : "5600", pimage : "gold-coin.png", addToCard : true}
  ])
  const [pro, setPro] = useState()

  useEffect(() => {
       localStorage.getItem("products") ? 
       setPro(JSON.parse(localStorage.getItem("products"))) :
       localStorage.setItem("products", JSON.stringify(allProducts))
       setPro(JSON.parse(localStorage.getItem("products")))
  }, [])


  const addToCard = (prod) => {
    let myProducts = [...pro];
    let newProduct = myProducts.map((product) => {
      if(product.id === prod.id) product.addToCard = true
      return product
    });
    localStorage.setItem("products", JSON.stringify(newProduct));
    setPro(newProduct)
  }

  const removeProduct = (prod) => {
    let myProducts = [...pro];
    let newProduct = myProducts.map((product) => {
      if(product.id === prod.id) product.addToCard = false
      return product
    });
    localStorage.setItem("products", JSON.stringify(newProduct));
    setPro(newProduct)
  }

  return (
    <>
    <Navbar allProducts={pro} removeProduct={removeProduct}/>
      <div className='container'>
        <div className="row g-3">
          {pro ? pro.map((product, index) => <Product product={product} key={index} addToCard={addToCard} removeProduct={removeProduct}/>) : ""}
        </div>
      </div>
      <Modal />
    </>
  );
}

export default App;
