import ProductCard from "./components/ProductCard"
const App =()=>{
  return(<>
<div className="cards">
  <ProductCard name="Laptop" price={80000} category="Electronics" availability="2 in Stock"/>
  <ProductCard name="Tablet" price={60000} category="Electronics" availability="5 in Stock"/>
  <ProductCard name="Shirt" price={900} category="Clothing" availability="Out of Stock"/>
</div>

  </>)
}
 export default App