import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
 
 
  export let useCartStore = create(persist(immer(
    (set)=>({
        cart:[],

        
        totalPrice:0,
        addToCart:(product)=>set((state)=>{
            let index = state.cart.findIndex((p)=> p.productid === product.productid);
            if(index === -1){
                // First time set quantity and total price
                state.cart.push({
                    ...product,
                    quantity:product.quantity,
                    tprice:product.price * product.quantity,  //Initial Total Price
                })

            } else{
                //Updating existing  quantity and total price
                state.cart[index].quantity  = state.cart[index].quantity + 1
                state.cart[index].tprice  = state.cart[index].quantity  * state.cart[index].price
            }
            state.totalPrice = state.cart.reduce((prev,curr)=> prev + curr.tprice,0)
            console.log(
                '🛒 Cart Updated:',
                state.cart.map((item) => ({
                  name: item.name,
                  quantity: item.quantity,
                  tprice: item.tprice,
                }))
              );
        })
    })), 
    { 
        name:"cart", 
        storage:createJSONStorage( () => sessionStorage),  
    }
)
);