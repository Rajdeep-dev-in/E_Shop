import { useSelector } from "react-redux"
import MainButton from "../components/MainButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOrderList } from "../features/orderslice";


function OrderDetails(){
    const userData = useSelector((state) => state.user?.userDetails)
    const cart = useSelector((state) => state.wishList?.cartBox)
    const totalPrice = useSelector((state) => state.wishList?.totalPrice);
    console.log(cart, 'cart box');
    console.log(userData, 'user')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handelOrder(e){
        e.preventDefault()
        const data = {
            orderId: Date.now(),
            totalPrice,
            payment: "Cash"
        }
        console.log(data, 'order data')
        dispatch(addOrderList(data))
        navigate("/success")
    }
    return(
        <>
            <div
                className="w-full lg:px-8 md:px-6 px-3"
            >
                <div
                    className="bg-green-300 text-green-600"
                >
                    <div
                        className="px-2 py-2"
                    >
                        <h3
                            className="text-3xl text-zinc-800 font-bold text-center"
                        >
                            User Details
                        </h3>
                        <p>Name : {userData[0]?.fullName}</p>
                        <p>Address : {userData[0]?.streetName},{userData[0]?.city},{userData[0]?.pinCode}/{userData[0]?.houseNo}</p>
                        <p>Email : {userData[0]?.email}</p>
                        <p>Phone No. : {userData[0]?.phoneNo}</p>
                    </div>
                    <div
                        className="px-2 py-2"
                    >
                        <h3
                            className="text-3xl text-zinc-800 font-bold text-center"
                        >
                            Order Details
                        </h3>
                        <div
                            className="flex flex-col gap-3"
                        >
                            {
                                cart.map((cart) => {
                                    return(
                                        <div
                                        key={cart.id}
                                className="flex justify-start items-center flex-wrap gap-3"
                            >
                                <p
                                    className="font-bold text-green-800 text-xl flex justify-start items-start flex-wrap"
                                >
                                    {cart.title}
                                </p>
                                <p>
                                    {cart.quantity}
                                </p>
                                <p>
                                    ${cart.price}
                                </p>
                                <p
                                    className="text-zinc-700 font-bold"
                                >
                                    ${cart.finalPrice}
                                </p>
                            </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                    <div
                        className="px-2 py-2 flex justify-end items-center "
                    >
                        <div
                            className="bg-green-300 text-green-600 flex justify-between"
                        >
                            <p
                                className="text-zinc-700 font-bold"
                            >
                                Total Price : ${totalPrice}
                            </p>
                        </div>
                        
                    </div>
                    <div
                        className="px-2 py-2 flex justify-end items-center"
                    >
                        <MainButton
                            onClick={handelOrder}
                            className="px-2 py-1 bg-yellow-300 text-zinc-700 font-bold hover:bg-yellow-400 rounded-md"
                        >
                            Place Order & Continue
                        </MainButton>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OrderDetails