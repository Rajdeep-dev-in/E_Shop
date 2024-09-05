import MainButton from './MainButton'
import {ShoppingCart} from 'lucide-react'
function List({imageUrl, title, price, id}){
    function handelAddCart(e){
        e.preventDefault()
        console.log("add to cart")
    }
    return(
        <>
            <div
                    className="flex justify-between items-center px-5 py-3 bg-green-200 text-green-700 my-3"
                >
                    <h3
                        className="text-2xl font-bold "
                    >
                        {title}
                    </h3>
                    <p
                        className="text-lg"
                    >
                        ${price}
                    </p>
                    <div
                        className="h-10 w-10 bg-gray-500"
                    >
                        <img 
                            src={imageUrl}
                            alt={title}
                            className='w-full h-full bg-cover object-cover'
                        />
                    </div>
                    <MainButton
                        className="bg-yellow-400 text-zinc-700 font-bold rounded-lg flex justify-center items-center gap-x-3 px-3 hover:bg-yellow-500"
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