import {MoveRight} from 'lucide-react'
import { NavLink } from 'react-router-dom'
function CatagoryCard({id, name, image}){
    return(
        <>
            <div className="w-72 h-20 bg-green-200 text-green-700 flex justify-between items-center px-3 py-2 rounded-lg">
                <NavLink to={`/products/${id}`}>
                    <h3 className=" font-bold text-xl flex justify-center items-center gap-x-3">{name} <span><MoveRight size={20} /></span>
                    </h3>
                </NavLink>
                <div className="w-14 h-14 bg-gray-500 rounded-md">
                    <img src={image} alt={name} className='w-full h-full bg-cover' />
                </div>
            </div>
        </>
    )
}

export default CatagoryCard