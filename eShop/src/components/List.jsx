import MainButton from './MainButton'
import {ShoppingCart, Trash2} from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addIntoCart, removeIntoWishList } from '../features/wishlistslice'

function List({imageUrl, title, price, id}){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handelAddCart(e){
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
        navigate('/cart')

    }
    function clearWiseList(){
        dispatch(removeIntoWishList(id))
    }
    return(
        <>
            <div
                    className="flex justify-between items-center px-5 py-3 bg-green-200 text-green-700 my-3"
                >
                    <NavLink
                        to={`/details/${id}`}
                        className="text-2xl font-bold "
                    >
                        {title}
                    </NavLink>
                    <p
                        className="text-lg"
                    >
                        ${price}
                    </p>
                    <NavLink
                        to={`/details/${id}`}
                        className="h-10 w-10 bg-gray-500"
                    >
                        <img 
                            src={imageUrl}
                            alt={title}
                            className='w-full h-full bg-cover object-cover'
                        />
                    </NavLink>
                    <div>
                        <Trash2 size={20} onClick={clearWiseList} className=' cursor-pointer text-red-600'/>
                    </div>
                    <MainButton
                        className="bg-yellow-400 text-zinc-700 font-bold rounded-lg flex justify-center items-center gap-x-3 px-2 py-1 hover:bg-yellow-500"
                        onClick={handelAddCart}
                    >
                        <ShoppingCart size={20} />
                        Add To Cart
                    </MainButton>
                    
                </div>
        </>
    )
}

export default List