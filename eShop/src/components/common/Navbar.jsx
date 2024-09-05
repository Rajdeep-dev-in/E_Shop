import logo from '../../image/eshop.jpg'
import { Heart, ShoppingCart } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

function Navbar(){
    return(
        <>
            <nav 
                className=" h-20  text-zinc-700 border-b flex justify-between items-center lg:px-20 px-10"
            >
                <Link 
                    to="/"
                    className='h-20 flex justify-center items-center bg-cover'
                >
                    <img 
                        className='h-full cursor-pointer bg-cover'
                        src={logo}
                    />
                </Link>
                <div
                    className='flex justify-center items-center lg:gap-x-10 gap-x-6'
                >
                    
                    <NavLink to="/wishlist" className='cursor-pointer'>
                        <Heart size={20}/>
                    </NavLink>
                    <NavLink to="/cart" className='cursor-pointer'>
                        <ShoppingCart size={20} />
                    </NavLink>
                    <div className='p-2 border bg-black text-white hover:bg-red-500 duration-150 cursor-pointer rounded-lg'>
                        <p>Log In</p>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar