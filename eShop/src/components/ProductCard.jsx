import { NavLink } from "react-router-dom"
import { Heart, ShoppingCart } from 'lucide-react'
import { useDispatch, useSelector } from "react-redux"
import { addIntoWishList, removeIntoWishList } from "../features/wishlistslice"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function ProductCard({data , wishListData}){
    const {images, title, price, category, id} = data
    let imageUrl = images[0].slice(2)
    const dispatch = useDispatch()
    //const toggleWishIcon = useSelector((state) => state.wishList.toggleWishList)
    const findList = wishListData.findIndex((list) => list.id == id)
    function addToWishList(e){
         e.preventDefault()
        if(wishListData[findList]?.status){
            dispatch(removeIntoWishList(id))
        }else{
            const data = {
                imageUrl,
                title,
                price,
                id,
                status: true
            }
            dispatch(addIntoWishList(data))
            toast.success("item added into wishlist")
        }
    }

    function addToCart(e){
        e.preventDefault()
        alert("add to Cart")
    }
    return(
        <>
            <NavLink
                to={`/details/${id}`}
                className="w-64 h-80 relative"
            >
                <div 
                    className="w-full h-52 "
                >
                    <img src={imageUrl} alt={title} className="w-full h-full bg-cover object-cover" />
                </div>
                <div
                    className="p-2 bg-zinc-300 rounded-full absolute top-2 right-2 cursor-pointer bg-transparent hover:bg-gray-200"
                    onClick={addToWishList}
                >
                    
                    {wishListData[findList]?.status === true ? <Heart size={16} color="#d02580" /> : <Heart size={16}/>}
                </div>
                <div
                    className="p-2 bg-zinc-300 rounded-full absolute top-12 right-2 cursor-pointer bg-transparent hover:bg-gray-200"
                    onClick={addToCart}
                >
                    <ShoppingCart size={16} />
                </div>
                <div className="w-full p-3">
                    <div className="flex justify-between items-start">
                        <h2 
                            className=" font-bold text-xl text-zinc-800"
                        >
                            {title}
                        </h2>
                        <p 
                            className="text-zinc-600 text-lg"
                        >
                            ${price}
                        </p>
                    </div>
                    <div className="mt-2">
                        <p
                            className="text-zinc-600 text-lg"
                        >
                            {category?.name}
                        </p>
                    </div>
                </div>
            </NavLink>
            {/* <ToastContainer /> */}
        </>
    )
}

export default ProductCard