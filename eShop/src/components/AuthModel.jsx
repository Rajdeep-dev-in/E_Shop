import { House, Eye, EyeOff } from "lucide-react";
import BaseInput from "./BaseInput";
import { useState } from "react";
import MainButton from "./MainButton";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userslice";


function AuthModel({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function handelFormSubmit(e) {
    e.preventDefault();
    if(type === "Log In User"){
        const data = {
            email,
            password,
          };
          console.log(data);
    }else{
        const data = {
            fullName,
            email,
            password
        }
        console.log(data)
        dispatch(addUser(data))

    }
    navigate("/")
  }
  function closeModel() {
    navigate("/")
  }

  function togglePassword() {
    setShowPassword((current) => !current);
  }
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className=" lg:w-1/3 md:w-5/6 bg-white text-zinc-700 py-4 px-3">
          <div className="w-full px-2">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">{type}</h2>
              <House size={20} onClick={closeModel} className="cursor-pointer"/>
            </div>
            <form
              onSubmit={handelFormSubmit}
              className="flex flex-col gap-4 my-4"
            >
              {type !== "Log In User" ? (
                <>
                  <div className="w-full border-b border-zinc-500 ">
                    <BaseInput
                      type="text"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="px-3 py-2 w-full"
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className="w-full border-b border-zinc-500 ">
                <BaseInput
                  type="email"
                  placeholder="user@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 px-3"
                />
              </div>
              <div className="flex justify-center items-center border-b border-zinc-500  pr-1">
                <BaseInput
                  type={showPassword ? "text" : "password"}
                  placeholder="*********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-2 px-3"
                />
                {showPassword ? (
                  <Eye size={16} onClick={togglePassword}  className="cursor-pointer"/>
                ) : (
                  <EyeOff size={16} onClick={togglePassword} className="cursor-pointer" />
                )}
              </div>
              <MainButton className="px-2 py-1 bg-yellow-300 text-zinc-700 hover:bg-yellow-400">
                {type === "Log In User" ? "Log In" : "Sign Up"}
              </MainButton>
            </form>
            <div>
              <p className="text-zinc-500">
                {type === "Log In User" ? (
                  <>
                    Don't have any account
                    <NavLink to="/register" className="text-blue-600">
                      Sign Up
                    </NavLink>
                  </>
                ) : (
                  <>
                    Already have an account
                    <NavLink to="/login" className="text-blue-600">
                      Log In
                    </NavLink>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthModel;
