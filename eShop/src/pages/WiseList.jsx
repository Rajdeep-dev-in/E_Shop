import List from "../components/List"
import wishlistlogo from '../image/wishlist.jpg'
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
function WiseList(){
    const listData = useSelector((state) => state.wishList.wishBox)
    
    return(
        <>
            <div className="w-full px-8 lg:px-20 py-10">
                { listData.map((item) => {
                    return(
                        <List 
                            key={item.id}
                            imageUrl={item.imageUrl}
                            title={item.title}
                            price={item.price}
                            id={item.id}
                        />
                    )
                })}
                {
                    !listData.length && <div 
                    className="flex justify-center items-center flex-col gap-y-2"
                >
                    <div 
                        className="w-72 h-56 "
                    >
                        <img 
                            src={wishlistlogo}
                            alt="empty wishlist logo"
                            className="w-full h-full bg-cover object-cover"
                        />
                    </div>
                    <div 
                        className="text-center text-zinc-600"
                    >
                        <p
                            className="text-xl font-bold"
                        >
                            Your Wishlist is Empty
                        </p>
                    </div>
                    <div
                        className="text-center text-blue-600 underline"
                    >
                        <NavLink
                            to='/products'
                        >
                            Go To Shop
                        </NavLink>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default WiseList