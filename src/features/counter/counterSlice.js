import {  createSlice } from '@reduxjs/toolkit';

//initial state
const initialState = {
  cartItems: [],
  shippingAddress: '',
  paymentMethod:''
};



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // reducers: add item, remove item, inc qty,  dec qty, clear cart, save address, save payment method
  reducers: {

    
    increment: (state,action) => {

      //finding item to be increemented
      const ItemInc = state.cartItems.find((x) => x.id === action.payload)
      if (ItemInc) {
       let newCart = state.cartItems.map((x) =>
        x.id === action.payload
          ? {
              ...x,
              qty: x.qty + 1
            }
          : x
      );

      //after update qty of item then updating state
      return {
        ...state,
        cartItems: newCart,
      }
      }  
    },



    //finding item to be decreemented
    decrement: (state,action) => {
      const ItemDec = state.cartItems.find((x) => x.id === action.payload)

      //make sure that item's qty should not be 0 or not be negative
      //will not futher decreement when it is 1.
      if (ItemDec && ItemDec.qty!==1) {
       let newCart = state.cartItems.map((x) =>{  return(
        x.id === action.payload
        ? {
            ...x,
            qty: x.qty - 1
          }
        : x
       )
        } 
      );

       //after update qty of item then updating state
      return {
        ...state,
        cartItems: newCart,
      }
      } 
    },
 


    //adding new item into state
    Add_Item:(state, action)=>{
     
      //if cart empty the simply add item to the state 
      if(state.cartItems.length===0){
        action.payload={...action.payload,qty:1}
       
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        }
        
      }

      //if there are already item present
      if(state.cartItems.length!==0){

        //it may possible the item you want to add in cart, it is already present
        // in such case you dont add item, you increement qty of that
        const existItem = state.cartItems.find((x) => x.id === action.payload.id)
        if (existItem) {
          let newCart = state.cartItems.map((x) =>
           x.id === action.payload.id
             ? {
                 ...x,
                 qty: x.qty + 1
               }
             : x
         );
         return {
           ...state,
           cartItems: newCart,
         }
         }
         
         //if item not already present then simply add it to the state
         else{
          action.payload={...action.payload,qty:1}
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          }
         } 
    }
      
     
  },


  //removing item on the basis of id, you can change it from it to other attrobute
    Remove_Item: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
        // in filter we excluded the item whose id matches with payload id
      }
    },


//get adddress in payload update the shipping address
    Save_Shipping_Address: (state, action) => {
      return {
        ...state,
        shippingAddress: action.payload,
      }
    },

//get payment method in payload and update the payment method
    Save_Payment_Method: (state, action) => {
      return {
        ...state,
        paymentMethod: action.payload,
      }
    },

//set the cart item to initial state(empty array), payment method and shipping address as well
//in other words it will make empty  cart
    Clear_Cart: () => {
      return {
        cartItems: [],
        shippingAddress: '',
        paymentMethod:''
      }
    },
  },
  
});

export const { increment, decrement,Add_Item, Remove_Item, Save_Shipping_Address,Save_Payment_Method,Clear_Cart } = counterSlice.actions;
export default counterSlice.reducer;
