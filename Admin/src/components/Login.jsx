// import React, { useState } from 'react'
// import axios from "axios"
// import { backend_url } from '../App'
// import { toast } from 'react-toastify'

// function Login({setToken}) {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const onSubmitHandler=async(e)=>{
        
//         try{
//             e.preventDefault()
//             const response= await axios.post(backend_url+"/api/user/admin",{email,password})
//             if(response.data.success){
//                 setToken(response.data.token)
//             }
//             else{
//                 toast.error(response.data.message)
//             }
//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)

//         }
//     }
//     return (
//         <div className='min-h-screen flex items-center justify-center w-full'>
//             <div className='bg-white shadow-md rounded-lg max-w-md px-8 py-6'>
//                 <h className="text-2xl font-bold mb-4"> Login Panel </h>
//                 <form action="" onSubmit={onSubmitHandler}>
//                     <div className='mb-3 min-w-72 '>
//                         <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
//                         <input className='rounded-md w-full px-3 py-2 border-gray-300 outline-none' type="email" placeholder='Email' value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required />
//                     </div>
//                     <div  className='mb-3 min-w-72 '>
//                         <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
//                         <input className='rounded-md w-full px-3 py-2 border-gray-300 outline-none' type="text" placeholder='password' value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required />
//                     </div>
//                     <button className='mt-2 w-full rounded-md bg-black text-white py-2 px-4 ' type='submit'>Login</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login

import React, { useState } from 'react'
import axios from "axios"
import { backend_url } from '../App'
import { toast } from 'react-toastify'

function Login({ setToken }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        try {

            console.log("Backend URL:", backend_url)

            const response = await axios.post(
                backend_url + "/api/user/admin",
                { email, password }
            )

            if (response.data.success) {

                setToken(response.data.token)

                localStorage.setItem("token", response.data.token)

                toast.success("Login Successfully")

            } else {

                toast.error(response.data.message)

            }

        } catch (error) {

            console.log(error)

            toast.error(error.response?.data?.message || error.message)

        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center w-full bg-gray-100'>

            <div className='bg-white shadow-lg rounded-lg w-[350px] px-8 py-8'>

                <h1 className="text-3xl font-bold mb-6 text-center">
                    Admin Login
                </h1>

                <form onSubmit={onSubmitHandler}>

                    <div className='mb-4'>

                        <p className='text-sm font-medium text-gray-700 mb-2'>
                            Email Address
                        </p>

                        <input
                            className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
                            type="email"
                            placeholder='Enter Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                    </div>

                    <div className='mb-4'>

                        <p className='text-sm font-medium text-gray-700 mb-2'>
                            Password
                        </p>

                        <input
                            className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
                            type="password"
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </div>

                    <button
                        className='mt-2 w-full rounded-md bg-black text-white py-2 px-4 hover:bg-gray-800 transition-all'
                        type='submit'
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Login