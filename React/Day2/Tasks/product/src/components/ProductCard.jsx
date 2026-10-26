const ProductCard=({name,price,category,availability})=>{
 return(<>

 <div className="product">

<h3>Product Name: {name}</h3>
<p>Price: ₹{price}</p>
<p>Category: {category}</p>
<p>Availability: {availability}</p>

 </div>

 </>)
}
export default ProductCard
