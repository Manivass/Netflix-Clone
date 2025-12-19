import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../Store/loginslice";
import storere from "../Store/store";

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSignUp = () => {
    dispatch(toggle());
  };
  const toggleLogin = useSelector((storere) => storere.login.toggleLogin);
  console.log(toggleLogin);

  return (
    <div>
      <img
        className="w-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_large.jpg"
      />

      <img
        className="absolute w-68 top-6 left-6 bg-linear-to-l from-black"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      <form className="w-3/11 p-14 absolute top-75 left-205 bg-black/70 h-auto text-white">
        <h2 className="text-5xl font-bold my-2   mx-11">
          Sign {toggleLogin ? "Up" : "In"}
        </h2>
        {toggleLogin && (
          <input
            type="text"
            placeholder="Name"
            className="block  p-4 my-7 w-5/6 mx-auto  text-2xl bg-gray-950/60 border-3 border-gray-700 outline-none"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="block  p-4 my-6 w-5/6 mx-auto  text-2xl bg-gray-950/60 border-3 border-gray-700 outline-none"
        />
        <input
          type="text"
          placeholder="Password"
          className="block  p-4 my-7 w-5/6 mx-auto  text-2xl bg-gray-950/60 border-3 border-gray-700 outline-none"
        />
        <button className="w-5/6  p-4 mx-auto bg-red-500 text-2xl font-semibold  items-center flex justify-center outline-none cursor-pointer">
          Sign {toggleLogin ? "Up" : "In"}
        </button>
        <input
          type="checkbox"
          className="w-5  h-5 border border-amber-300 my-4 ml-11 mr-1"
        />
        <span className="text-xl font-semibold">Remember Me</span>
        <h2 className="text-xl ml-11">
          {toggleLogin ? "Already have" : "New to"} NetFlix?{" "}
          <span
            className="font-bold hover:underline hover:cursor-pointer"
            onClick={handleSignUp}
          >
            Sign {toggleLogin ? "In" : "Up"} Now{" "}
          </span>
        </h2>
      </form>
    </div>
  );
};

export default LoginPage;
