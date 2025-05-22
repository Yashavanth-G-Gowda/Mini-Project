// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="grid place-items-center h-screen bg-gradient-to-r from-teal-900 via-teal-500 to-teal-200">
//             <div className="rounded-md w-[400px] border-black bg-slate-100 p-10 shadow-gray-500 shadow-lg">
//                 <div className="flex flex-column justify-center items-center relative w-full mb-10">
//                     <button className="absolute left-0 top-1" onClick={() => navigate('/')}>
//                         Back
//                     </button>
//                     <h1 className="text-3xl text-teal-700 font-semibold">Log in</h1>
//                 </div>
//                 <form className="space-y-7 grid place-items-center">
//                     <div className="flex flex-col">
//                         <label for="address" className="text-semibold text-gray-700 mb-2">Email</label>
//                         <input class="px-3 py-2 rounded-md bg-transparent border-2 border-zinc-800 outline-none w-60" type="email" placeholder="Email Address" name="email" id='address' />
//                     </div>
//                     <div className="flex flex-col ">
//                         <label for="address" className="text-semibold text-gray-700 mb-2">Password</label>
//                         <input class="px-3 py-2 rounded-md bg-transparent border-2 border-zinc-800 outline-none w-60" type="password" placeholder="password" name="password" />
//                     </div>
//                     <div class="flex flex-row justify-evenly w-full text-white">
//                         <button class="px-5 py-2 rounded-md bg-teal-500">
//                             Login
//                         </button>
//                         <button class="px-5 py-2 rounded-md bg-teal-500" onClick={() => navigate("/signup")}>Sign Up</button>
//                     </div>
//                     <button class="px-2 py-2 rounded-md text-red-700 hover:underline
//                     ">Forgot Password?</button>
//                 </form>
//         </div>
//         </div >
//     );
// };

// export default LoginPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Replace with your login logic
        // Example navigation after login
        navigate('/');
    };

    return (
        <div className="grid place-items-center h-screen bg-gradient-to-r from-teal-900 via-teal-500 to-teal-200">
            <div className="rounded-md w-[400px] border-black bg-slate-100 p-10 shadow-gray-500 shadow-lg">
                <div className="flex flex-column justify-center items-center relative w-full mb-10">
                    <button className="absolute left-0 top-1" onClick={() => navigate('/')}>
                        Back
                    </button>
                    <h1 className="text-3xl text-teal-700 font-semibold">Log in</h1>
                </div>
                <form className="space-y-7 grid place-items-center" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-semibold text-gray-700 mb-2">Email</label>
                        <input
                            id="email"
                            className="px-3 py-2 rounded-md bg-transparent border-2 border-zinc-800 outline-none w-60"
                            type="email"
                            placeholder="Email Address"
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-semibold text-gray-700 mb-2">Password</label>
                        <input
                            id="password"
                            className="px-3 py-2 rounded-md bg-transparent border-2 border-zinc-800 outline-none w-60"
                            type="password"
                            placeholder="Password"
                            {...register("password", { required: true })}
                        />
                    </div>
                    <div className="flex flex-row justify-evenly w-full text-white">
                        <button type="submit" className="px-5 py-2 rounded-md bg-teal-500">
                            Login
                        </button>
                        <button className="px-5 py-2 rounded-md bg-teal-500" onClick={() => navigate("/signup")}>Sign Up</button>
                    </div>
                    <button className="px-2 py-2 rounded-md text-red-700 hover:underline">
                        Forgot Password?
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
