import {CircleCheck} from 'lucide-react'
import MainButton from '../components/MainButton'
import { useNavigate } from 'react-router-dom'

function Success(){
    const navigate = useNavigate()
    function handelViewOrder(e){
        e.preventDefault()
        navigate("/status")
    }
    return(
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
            >
                <div
                    className=" lg:w-1/2 md:w-2/3 w-3/4 bg-white text-zinc-700 py-4 px-4"
                >
                    <div
                        className="flex justify-center items-center text-2xl my-3"
                    >
                        <CircleCheck size={48} color="#0fd236" />
                    </div>
                    <div
                        className="font-2xl text-zinc-700 font-bold text-center font-mono my-3"
                    >
                        <h3>Thank you for ordering</h3>
                    </div>
                    <div
                        className='md:flex flex-col justify-center items-center gap-3 my-3'
                    >
                        <MainButton
                            className="bg-white text-zinc-700 font-bold text-sm md:text-lg px-2 py-1 border border-zinc-700 rounded-md w-full my-1"
                            onClick={handelViewOrder}
                        >
                            VIEW ORDER
                        </MainButton>
                        <MainButton
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm md:text-lg px-2 py-1 rounded-md w-full my-1"
                        >
                            CONTINUE SHOPPING
                        </MainButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Success