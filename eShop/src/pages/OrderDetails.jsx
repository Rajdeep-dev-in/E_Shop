import { useSelector } from "react-redux"


function OrderDetails(){
    const userData = useSelector((state) => state.user?.userDetails)
    console.log(userData, 'user')
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
                            <div
                                className="flex justify-start items-center flex-wrap gap-3"
                            >
                                <p
                                    className="font-bold text-green-800 text-xl flex justify-start items-start flex-wrap"
                                >
                                    Product Name
                                </p>
                                <p>
                                    4
                                </p>
                                <p>
                                    $50
                                </p>
                                <p
                                    className="text-zinc-700 font-bold"
                                >
                                    $200
                                </p>
                            </div>

                        </div>

                    </div>
                    <div
                        className="px-2 py-2 flex justify-end items-center"
                    >
                        <div
                            className="bg-green-300 text-green-600 flex justify-between"
                        >
                            <p
                                className="text-zinc-700 font-bold"
                            >
                                Total Price : $200
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OrderDetails