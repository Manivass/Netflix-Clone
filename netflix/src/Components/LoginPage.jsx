import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../Store/loginslice";
import { validate } from "../utils/validate.jsx";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.jsx";
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import { signOutButton } from "../Store/loginslice";
import { addUser } from "../Store/userSlice.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const signUp = useSelector((store) => store.login.toggleLogin);
  console.log(signUp);

  const handleSignUp = () => {
    dispatch(toggle());
    email.current.value = "";
    password.current.value = "";
  };
  const handleSubmit = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    let checkValidate = signUp
      ? validate(
          email.current.value,
          password.current.value,
          name.current.value
        )
      : validate(email.current.value, password.current.value);
    setErrorMessage(checkValidate);
    if (checkValidate !== null) return;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    if (signUp) {
      if (!emailValue || !passwordValue) {
        setErrorMessage("Email and Password required");
        return;
      }
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              console.log("Profile Updated");
            })
            .catch((error) => {
              console.log("Error in profile update" + error);
            });
          console.log(user);

          dispatch(signOutButton());
          const { uid, email, displayName } = auth.currentUser;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          navigate("/");
        });
    } else {
      if (!emailValue || !passwordValue) {
        setErrorMessage("Email and Password required");
        return;
      }
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          const { uid, email, displayName } = auth.currentUser;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          dispatch(signOutButton());
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          navigate("/");
        });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        className="fixed inset-0 w-full h-full object-cover -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_large.jpg"
      />

      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full max-w-lg p-12 bg-black/60 text-white rounded-lg shadow-2xl space-y-4"
      >
        <h2 className="text-5xl font-bold mb-3 text-white ">
          Sign {signUp ? "Up" : "In"}
        </h2>
        {signUp && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="block w-full p-4 my-6 text-2xl bg-gray-950/60 border border-gray-700 outline-none rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="block w-full p-4 my-6 text-2xl bg-gray-950/60 border border-gray-700 outline-none rounded"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="block w-full p-4 my-6 text-2xl bg-gray-950/60 border border-gray-700 outline-none rounded"
        />
        <h2 className="text-xl font-semibold mb-3 text-red-500 text-start">
          {errorMessage}
        </h2>
        <button
          onClick={handleSubmit}
          className="w-full p-4 bg-red-500 text-2xl font-semibold flex justify-center rounded cursor-pointer"
        >
          Sign {signUp ? "Up" : "In"}
        </button>
        <input
          type="checkbox"
          className="w-5  h-5 border border-amber-300 my-4 ml-0 mr-1 translate-y-1"
        />
        <span className="text-xl font-semibold ">Remember Me</span>
        <h2 className="text-xl ml-0">
          {signUp ? "Already have" : "New to"} NetFlix?{" "}
          <span
            className="font-bold hover:underline hover:cursor-pointer underline"
            onClick={handleSignUp}
          >
            Sign {signUp ? "In" : "Up"} Now{" "}
          </span>
        </h2>
      </form>
    </div>
  );
};

export default LoginPage;
