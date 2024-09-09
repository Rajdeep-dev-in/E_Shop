import logo from '../../image/eshop.jpg'
import { Heart, ShoppingCart, LogOut } from 'lucide-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import MainButton from '../MainButton'
import { getUserData, logOutUser } from '../../features/userslice'
import { useEffect } from 'react'


function Navbar(){
    const cartItemLength = useSelector((state) => state.wishList?.cartBox?.length)
    const user = useSelector((state) => state.user?.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(user == null){
            dispatch(getUserData())
        }
    },)

    function handelLogout(e){
        e.preventDefault()
        dispatch(logOutUser())

    }

    function handelLogIn(e){
        e.preventDefault()
        navigate("/login")
    }
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
                    <NavLink to="/cart" className='cursor-pointer flex justify-center items-center'>
                        <ShoppingCart size={20} />{cartItemLength ? <sup className=' font-bold text-zinc-700'>{cartItemLength}</sup> : "" }
                    </NavLink>
                    {
                        user 
                        ? 
                            <>
                                <MainButton
                                    className='p-2 border bg-black text-white hover:bg-red-500 duration-150 cursor-pointer rounded-lg flex justify-center items-center gap-2'
                                    onClick={handelLogout}
                                >
                                    <LogOut size={16} />Logout
                                </MainButton>
                            </>
                        :
                            <>
                                <MainButton
                                    className='p-2 border bg-black text-white hover:bg-red-500 duration-150 cursor-pointer rounded-lg'
                                    onClick={handelLogIn}
                                >
                                    Log In
                                </MainButton>
                            </>
                    }
                    {/* <div >
                        {user ? <p></p>  :<p></p>}
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar