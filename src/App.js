import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from './components/BakeryItem'

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */



function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  var dict = {};
  //const [count, setCount] = useState(1);
  const [cart, updateCart] = useState([]);
  const [price, updatePrice] = useState(0);
  

  function handleClick(name, itemprice, count, setCount){
      setCount(count+1);
      //this.setState({count : state.count + 1})
      //dict[name] = 1;
      updatePrice(price + itemprice);
      updateCart([...cart, name + " x" + count])
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item) => ( // TODO: map bakeryData to BakeryItem components
      <BakeryItem item={item} handleClick={handleClick}

      />
      
        //<p>Bakery Item {bakeryItem}</p> // replace with BakeryItem component
      ))}

      
      

      


      <div>
        <h2>Cart</h2>
        
        {/* {cart.filter(getLastOccuring)} */}
        {cart.map(item => <p>{item}</p>)}
       
        {price.toFixed(2)} 
        <br></br><br></br><br></br>
        
        
        
        
        
        
        

      </div>
    </div>
  );
}

export default App;
