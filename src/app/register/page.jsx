"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";

const RegisterPa = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formLogin = async (data) => {
    console.log(data, "data");
    const {name , email , password} = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email:email, // required
      password: password, // required
      
      callbackURL: "/",
    });
    if(error) {
      console.log(error.message);
      return;
    }
    else {
      alert("Data is stored succesfully");
      window.location.href = "/"
    }
   console.log(data, "data registred");
  };
  const handleGoogleSignin = async() => {
      
  const data = await authClient.signIn.social({
      provider: "google",
    });
  }

  return (
    <div className="container mx-auto bg-slate-200 p-5 m-5">
      <div className="bg-white text-center rounded-xl space-y-2 m-6 ">
        <h3 className="text-2xl font-bold"> Please Register your account</h3>

        <form onSubmit={handleSubmit(formLogin)}>
          <fieldset className="flex flex-col justify-center items-center">
            <legend className="text-center">Enter your Name</legend>
            <input
              type="text"
              {...register("name", { required: "Input cannot empty" })}
              className="input"
              placeholder="Type here"
            />
            {errors.name && (
              <p className="text-red-500 ">{errors.name.message}</p>
            )}
          </fieldset>

          <fieldset className="flex flex-col justify-center items-center">
            <legend className="text-center">Enter your Email</legend>
            <input
              type="email"
              {...register("email", { required: "Input cannot empty" })}
              className="input"
              placeholder="Type here"
            />
            {errors.email && (
              <p className="text-red-500 ">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="flex flex-col justify-center items-center">
            <legend className="text-center">Enter Your password</legend>
            <input
              type="password"
              className="input"
              placeholder="Type here"
              {...register("password", { required: "Password cannot empty" })}
            />
            {errors.password && (
              <p className="text-red-400"> {errors.password.message}</p>
            )}
          </fieldset>
          <div className=" flex justify-center space-y-3 m-3">
            <button className="btn items-center">Submit</button>
          </div>
        </form>
        <p>
          Already Have an Account ?{" "}
          <Link href={"/login"} className="text-blue-400">
            Login
          </Link>
          
        </p>
        <div>
        <div className="font-bold">OR</div>
        <div className="flex items-center justify-center ">Register with </div> 
        <div className=" flex items-center justify-center">
                <button onClick={handleGoogleSignin} className="flex justify-center items-center text-center text-red-500 font-bold"> <span className="mx-4"><FaGoogle  /></span>Google</button> 
        </div>
        
      </div>
      
      </div>
      
    </div>
  );
};

export default RegisterPa;
