import { NavLink } from "react-router-dom"
import { Heart, ShoppingCart } from 'lucide-react'
import { useDispatch, useSelector } from "react-redux"
import { addIntoCart, addIntoWishList, removeIntoWishList } from "../features/wishlistslice"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';


function ProductCard({data , wishListData, cartListData}){
    console.log(cartListData, 'cart list')
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

    // add cart
    
    function addToCart(e){
        e.preventDefault()
        const data = {
            imageUrl,
            title,
            price,
            finalPrice: price,
            id,
            quantity: 1
        }
        dispatch(addIntoCart(data))
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
                    className="p-2  rounded-full absolute top-2 right-2 cursor-pointer bg-transparent "
                    onClick={addToWishList}
                >
                    
                    {wishListData[findList]?.status === true ? <FontAwesomeIcon icon={faHeart} color="red"  className=" rounded-full" /> : <Heart size={16}/>}
                </div>
                <div
                    className="p-2  rounded-full absolute top-12 right-2 cursor-pointer bg-transparent "
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