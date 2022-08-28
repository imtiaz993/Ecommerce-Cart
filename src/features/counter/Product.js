import React from 'react'
import { useDispatch } from 'react-redux';
import { Add_Item, } from './counterSlice';
const Product = () => {
  const dispatch = useDispatch();

  //here you will have your products from api , for testing i take two as dummy
  const mobile = [
    { id: 1, model: 'Iphone 13', company: 'Apple', price: 699, img: 'https://pngimg.com/uploads/iphone_13/iphone_13_PNG2.png' },
    { id: 2, model: 'Iphone X', company: 'Apple', price: 499, img: 'https://www.transparentpng.com/thumb/-iphone-x/7vQ8aI-iphone-pictures-transparent-png-pictures-free-icons.png' }
  ]


  return (


    //here you will populate your data into jsx
    <div style={{ display: "flex", flexDirection: "column", borderRight: "1px solid black" }}>
      <h1>Products</h1>
      {
        mobile.map((x, index) =>
          <div style={{ display: "flex", width: "20%" }} key={index}>
            <div>
              <img src={x.img} alt='item picture' width="200" height="300" />
            </div>
            <div>
              <div>
                <h1>{x.model}</h1>
                <h4>Brand: {x.company}</h4>
                <h3>Price: ${x.price}</h3>
              </div>
              <div>


                {/*this is add to cart dispatcher which dispatch whole object */}
                <button onClick={() => { dispatch(Add_Item(x)) }}>Add to Cart</button>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Product