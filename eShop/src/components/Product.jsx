import MainButton from "./MainButton"
import { Heart, ShoppingCart } from "lucide-react"
import {useDispatch} from 'react-redux'
import { addIntoWishList, addIntoCart } from "../features/wishlistslice"
function Product({data}){
    const {title, price, id, images, description} = data
    let imageUrl = images[0].slice(2)
    const dispatch = useDispatch()
    function addProductToWishList(e){
        e.preventDefault()
        const data = {
            imageUrl,
            title,
            price,
            id,
            status: true
        }
        dispatch(addIntoWishList(data))
    }

    function addProductToCart(e){
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
            <div className="flex justify-center items-center gap-2">
                <div
                    className="w-1/2 bg-gray-300 h-96 rounded-lg cursor-pointer"
                >
                    <img src={imageUrl} alt={title} className="w-full h-full bg-cover object-cover" />

                </div>
                <div className="w-1/2 px-2 h-96">
                    <h2
                        className="text-zinc-800 text-5xl font-bold my-1"
                    >
                        {title}
                    </h2>
                    <p 
                        className="text-xl font-bold text-zinc-800 my-2"    
                    >
                        ${price}
                    </p>
                    <hr />
                    <h4 className="text-zinc-500 font-bold text-lg my-1">
                        Description
                    </h4>
                    <p className="text-zinc-700 my-1">
                        {description}
                    </p>
                    <div className="flex justify-start items-start my-3 gap-2">
                        <MainButton
                            className=" bg-red-500 text-white font-bold rounded-lg flex justify-center items-center gap-x-3 px-3 py-2 hover:bg-red-600"
                            onClick={addProductToWishList}
                        >
                            <Heart size={20}/>
                            Add To WishList
                        </MainButton>
                        <MainButton 
                            className="bg-yellow-400 text-zinc-700 font-bold rounded-lg flex justify-center items-center gap-x-3 px-3 py-2 hover:bg-yellow-500"
                            onClick={addProductToCart}
                        >
                            <ShoppingCart size={20} />
                            Add To Cart
                        </MainButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product