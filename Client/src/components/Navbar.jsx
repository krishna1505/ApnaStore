
import { assets } from "../assets/assets"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import axios from "axios"

function Navbar() {
    const [visible, setVisible] = useState(false)
    const { getCartCount, search, setSearch, token, setToken, setCartItems, userData, setUserData } = useContext(ShopContext)
    const navigate = useNavigate()
    const [show, setShow] = useState(true)

    const goToCollection = (e) => {
        e.preventDefault();
        navigate('/collection')
    }

    const handleLogout = () => {
        navigate('/login')
        localStorage.removeItem("token")
        setToken('')
        setCartItems({})

    }

    return (
        <div className='flex items-center justify-between py-3 font-medium mt-0 m-0 p-0 px-3 border-b-1 box-content shadow-md'>


            <Link to="/">
                <div className="flex items-center">
                    <img src={assets.logo} alt="Logo" className="max-w-11 mix-blend-color-burn" />
                    <p className="font-extrabold cursor-pointer cursive hidden sm:contents ">APNASTORE</p>
                </div>
            </Link>

            {/* search function and ... */}

            <NavLink className="flex flex-col items-center gap-1 ">
                <div>
                    <form className="flex items-center bg-slate-200 border-none h-[35px] rounded-lg px-4" onSubmit={goToCollection} >
                        <div className="border-none"  >
                            <input type="text" placeholder="Search" className="outline-none  bg-slate-200 w-24 sm:w-56 "
                                onChange={(e) => setSearch(e.target.value)} />


                        </div>


                        <div><img src={assets.search_icon} alt="search-icon" className="w-3.5 ml-1 cursor-pointer" /></div>


                    </form>
                    
                </div>
            </NavLink>

            <ul className="flex text-sm text-gray-700 items-center">

                <div className="flex flex-col items-center gap-1 pl-2">
                    <div className="flex items-center">
                        <div className="">
                            <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} alt="" className="w-4 cursor-pointer mx-1" />

                        </div>
                        {token ?
                            <div className="hidden sm:contents"><p>{ }</p></div>
                            : <div onClick={() => token ? null : navigate('/login')} className="hidden sm:contents cursor-pointer"><p>Login</p></div>
                        }
                        {
                            token &&
                            <div className="group relative" >
                                <img src={assets.dropdown_icon} alt="" className="w-4 pt-0.5 cursor-pointer" />
                                <div className="group-hover:block hidden absolute right-0 px-4 dropdown-menu opacity-100" >
                                    <div className="flex flex-col gap-2 w-36 py-1  px-5 bg-slate-100 text-gray-500 rounded hover:block">
                                        <p onClick={handleLogout} className="cursor-pointer hover:text-black" >Logout</p>

                                        <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black" >Orders</p>
                                    </div>
                                </div>

                            </div>
                        }


                    </div>
                </div>
                <Link to='/cart' className="flex items-center gap-1 justify-center sm:ml-8 ml-4 ">
                    <div className="flex items-center relative">
                        <div><img src={assets.cart_icon} alt="" className="w-4 mx-1" /></div>
                        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] "

                        >
                            {getCartCount()}
                        </p>

                    </div>
                    <div className="hidden sm:contents px-1" ><p>Cart</p></div>
                </Link>
               

            </ul>


       


        </div>

    )
}

export default Navbar