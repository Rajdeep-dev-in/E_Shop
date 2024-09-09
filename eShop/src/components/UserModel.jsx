import { X } from "lucide-react";
import BaseInput from "./BaseInput";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainButton from "./MainButton";
import { useNavigate } from "react-router-dom";
import { addUserFullDetails } from "../features/userslice";

function UserModel(){
    const user = useSelector((state) => state.user?.user)
    const userData = useSelector((state) => state.user?.userDetails)
    // console.log(userData, 'user data')
    const [fullName, setFullName] = useState(user.fullName || "")
    const [email, setEmail] = useState(user.email || "")
    const [phoneNo, setPhoneNo] = useState(userData[0]?.phoneNo || null)
    const [streetName, setStreetName] = useState(userData[0]?.streetName || "")
    const [buildingName, setBuildingName] = useState(userData[0]?.buildingName || "")
    const [houseNo, setHouseNo] = useState(userData[0]?.houseNo || "")
    const [city, setCity] = useState(userData[0]?.city || "")
    const [pinCode, setPinCode] = useState(userData[0]?.pinCode || "")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handelOrderForm(e){
        e.preventDefault()
        if(!userData.length){
            const data = {
                fullName,
                email,
                phoneNo,
                streetName,
                buildingName,
                houseNo,
                city,
                pinCode
            }
            console.log(data)
            dispatch(addUserFullDetails(data))
        }
        navigate("/order")
        
    }
    
    return(
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
            >
                <div
                    className="lg:w-1/3 md:w-5/6 bg-white text-zinc-700 py-4 px-3"
                >
                    <div
                        className="flex justify-between items-center w-full px-2"
                    >
                        <h1
                            className="text-3xl font-bold text-zinc-700"
                        >
                            User Details
                        </h1>
                        <X size={20} />
                    </div>
                    <form
                        className="w-full px-2 py-2 flex flex-col gap-3 "
                        onSubmit={handelOrderForm}
                    >
                        <div className="w-full">
                            <BaseInput 
                                type="text"
                                placeholder="John Doe"
                                value={fullName}
                                onChange={ (e) => setFullName(e.target.value)}
                                className="w-full px-3 py-2 border-b border-zinc-500"
                                disabled
                            />
                        </div>
                        <div className="w-full">
                            <BaseInput 
                                type="email"
                                placeholder="john@gmail.com"
                                value={email}
                                onChange={ (e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border-b border-zinc-500"
                                disabled
                            />
                        </div>
                        <div className="w-full">
                            <BaseInput 
                                type="number"
                                placeholder="+91"
                                value={phoneNo}
                                onChange={ (e) => setPhoneNo(e.target.value)}
                                className=" w-full px-3 py-2 border-b border-zinc-500"
                            />
                        </div>
                        <div 
                            className="w-full lg:flex lg:justify-center lg:items-center lg:gap-x-2 flex-col gap-2"
                        >
                            <BaseInput 
                                type="text"
                                placeholder="Street Name"
                                value={streetName}
                                onChange={e => setStreetName(e.target.value)}
                                className="md:w-full px-3 py-2 border-b border-zinc-500"
                            />
                            <BaseInput 
                                type="text"
                                placeholder="Building Name."
                                value={buildingName}
                                onChange={e => setBuildingName(e.target.value)}
                                className="md:w-full px-3 py-2 border-b border-zinc-500"
                            />
                        </div>
                        <div 
                            className="w-full lg:flex lg:justify-center lg:items-center lg:gap-x-2 flex-col gap-2"
                        >
                            <BaseInput 
                                type="text"
                                placeholder="House No."
                                value={houseNo}
                                onChange={e => setHouseNo(e.target.value)}
                                className="md:w-full px-3 py-2 border-b border-zinc-500"
                            />
                            <BaseInput 
                                type="text"
                                placeholder="City"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                                className="md:w-full px-3 py-2 border-b border-zinc-500"
                            />
                        </div>
                        <div className="w-full">
                            <BaseInput 
                                type="text"
                                placeholder="Pin Code"
                                value={pinCode}
                                onChange={ (e) => setPinCode(e.target.value)}
                                className="w-full px-3 py-2 border-b border-zinc-500"
                            />
                        </div>
                        <MainButton
                            className="px-2 py-1 bg-yellow-300 text-zinc-800 font-bold hover:bg-yellow-400 rounded-md my-2"
                        >
                            Save & Continue
                        </MainButton>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserModel;