import MainButton from "../components/MainButton";
import { Trash2 } from "lucide-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeIntoCart } from "../features/wishlistslice";
import {NavLink} from 'react-router-dom'

function CartList({imageUrl, id , title, price, quantity, finalPrice}){
    
    function calculateItemPrice(){
        price = price * quantity
    }
    useEffect(() => {
        calculateItemPrice()
    })
    
    const dispatch = useDispatch()
    function removeCart(){
      dispatch(removeIntoCart(id))
    }

    function removeQuantity(e){
      e.preventDefault()
      if(quantity > 1){
        dispatch(decreaseQuantity(id))
      }
    }

    function addQuantity(e){
      e.preventDefault()
      if(quantity < 15){
        dispatch(increaseQuantity(id))
      }
    }
    return(
        <>
            <div className="flex justify-between items-center px-5 py-3 bg-green-300 text-green-700 my-3">
              <NavLink
                to={`/details/${id}`}
                className="flex justify-center items-center flex-wrap"
               >
                {title}
              </NavLink>
              <NavLink 
                to={`/details/${id}`}
                className="w-10 h-10 bg-gray-500"
              >
                <img 
                    src={imageUrl}
                    className="w-full h-full bg-cover object-cover"
                />
              </NavLink>
              <div className="flex justify-center items-center gap-2">
                <MainButton className="p-1 bg-red-500 text-white" onClick={removeQuantity}>-</MainButton>
                <p className=" text-zinc-800 text-lg">{quantity}</p>
                <MainButton className="p-1 bg-yellow-500 text-zinc-800" onClick={addQuantity}>
                  +
                </MainButton>
                <div>
                    <p>${finalPrice}</p>
                </div>
                <div>
                  <Trash2 size={20} className=" cursor-pointer text-red-600" onClick={removeCart} />
                </div>
              </div>
            </div>
        </>
    )
}

export default CartList;