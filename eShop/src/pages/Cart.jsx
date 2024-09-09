import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import cartLogo from "../image/emptycart.png";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import CartList from "../components/CartList";
import MainButton from "../components/MainButton";
import { clearAllCartItems } from "../features/wishlistslice";
import {useState} from 'react'
import UserModel from "../components/UserModel";


function Cart() {
  const listData = useSelector((state) => state.wishList?.cartBox);
  const totalPrice = useSelector((state) => state.wishList?.totalPrice);
  const cartItems = useSelector((state) => state.wishList?.cartBox);
  const user = useSelector((state) => state.user?.user)
  const dispatch = useDispatch();
  // console.log(listData, "list");
  // console.log(totalPrice, "price");
  const navigate = useNavigate()
  const [openModel, setOpenModel] = useState(false)


  function deleteAllCartItems(e) {
    e.preventDefault();
    dispatch(clearAllCartItems());
  }

  function handelBuyItem(e){
    e.preventDefault()
    if(!user){
      navigate("/login")
    }else{
      setOpenModel(true)
      console.log("user exist")
    }
  }

  return (
    <>
      <div className="w-full px-8 lg:px-20 py-10">
        {
          openModel && <UserModel />
        }
        {listData?.length ? (
          <>
            <div className="flex justify-end items-end pr-5">
              <MainButton
                className="p-2 bg-red-500 text-white flex justify-center items-center gap-2 rounded-md"
                onClick={deleteAllCartItems}
              >
                <Trash2 size={20} />
                Clear Cart
              </MainButton>
            </div>
            {listData.map((cart) => {
              return (
                <CartList
                  key={cart.id}
                  id={cart.id}
                  imageUrl={cart.imageUrl}
                  title={cart.title}
                  price={cart.price}
                  quantity={cart.quantity}
                  finalPrice={cart.finalPrice}
                />
              );
            })}
            <div className="w-96 h-auto bg-gray-200 text-green-600 px-5 py-4">
              {cartItems.map((cart) => {
                return (
                  <>
                    <div
                      key={cart.id}
                      className="flex justify-between items-center"
                    >
                      <h4 className=" font-bold text-green-900 w-2/3">
                        {cart.title} :
                      </h4>
                      <p>$ {cart.finalPrice}</p>
                    </div>
                    <hr className="w-full text-zinc-800 h-1" />
                  </>
                );
              })}
              <div className="flex justify-between items-center">
                <h4 className=" font-bold text-green-900">Total Price :</h4>
                <p className="text-zinc-800 font-bold">$ {totalPrice}</p>
              </div>
              <MainButton 
                onClick={handelBuyItem}
                className="px-2 py-1 my-2 text-zinc-800 bg-yellow-300 hover:bg-yellow-400 rounded-lg"
              >
                Buy Now
              </MainButton>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center items-center flex-col gap-y-2">
              <div className="w-72 h-56 ">
                <img
                  src={cartLogo}
                  alt="empty wishlist logo"
                  className="w-full h-full bg-cover object-cover"
                />
              </div>
              <div className="text-center text-zinc-600">
                <p className="text-xl font-bold">Your Cart is Empty</p>
              </div>
              <div className="text-center text-blue-600 underline">
                <NavLink to="/products">Go To Shop</NavLink>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
