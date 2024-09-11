
function OrderStatus(){
    return(
        <>
            <div
                className="w-full px-4 py-4"
            >
                <div
                    className="flex justify-center items-center text-4xl py-2"
                >
                    <h1
                        className=" text-zinc-700 font-bold"
                    >
                        Order Details
                    </h1>
                </div>
                <table
                    className="w-full"
                >
                    <thead>
                        <tr
                            className="text-zinc-800 font-bold"
                        >
                            <td>
                                Order Id
                            </td>
                            <td>
                                Total Price
                            </td>
                            <td>
                                Payment Method
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    )
}

export default OrderStatus