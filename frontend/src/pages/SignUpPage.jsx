import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/signup', data);
            if (response.status === 200) {
                navigate('/');
                
            }
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    const roles = ["Student", "Faculty", "Management"];
    const inputs = [
        { label: "Name", type: "text", placeholder: "Name", name: "name" },
        { label: "Phone Number", type: "number", placeholder: "Eg: 3475122943", name: "phone" },
        { label: "Email", type: "email", placeholder: "Email Address", name: "email" },
        { label: "Password", type: "password", placeholder: "Password", name: "password" }
    ];

    return (
        <div className="grid place-items-center h-fit py-7 bg-gradient-to-r from-teal-900 via-teal-500 to-teal-200">
            <div className="rounded-md w-[500px] border-black bg-slate-100 p-10 shadow-gray-500 shadow-lg">
                <div className="flex justify-center items-center relative w-full mb-10">
                    <button className="absolute left-0 top-1" onClick={() => {
                        navigate('/')
                    }}>Back</button>
                    <h1 className="text-3xl text-teal-700 font-semibold">Sign Up</h1>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-between">
                        {roles.map((role) => (
                            <label key={role} className="text-semibold text-gray-700 mb-2 flex items-center">
                                <input
                                    className="mr-2"
                                    type="radio"
                                    {...register("role", { required: true })}
                                    value={role}
                                />
                                {role}
                            </label>
                        ))}
                    </div>
                    {errors.role && <span className="text-red-500 text-sm">Role is required</span>}

                    {inputs.map(({ label, type, placeholder, name }) => (
                        <div key={name} className="flex flex-col">
                            <label className="text-semibold text-gray-700 mb-2">{label}</label>
                            <input
                                className={`px-3 py-2 rounded-md bg-transparent border-2 border-zinc-800 outline-none w-full ${errors[name] ? 'border-red-500' : ''}`}
                                type={type}
                                placeholder={placeholder}
                                {...register(name, { required: true })}
                            />
                            {errors[name] && <span className="text-red-500 text-sm">{label} is required</span>}
                        </div>
                    ))}
                    <div className="flex justify-center gap-7 w-full text-white">
                        <button onClick={() => {
                            navigate("/login")
                        }} type="button" className="px-4 py-2 rounded-md bg-teal-500">Login</button>
                        <button type="submit" className="px-5 py-2 rounded-md bg-teal-500">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
