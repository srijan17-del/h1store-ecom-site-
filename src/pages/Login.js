import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, deleteUser } from "../redux/h1storeSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        dispatch(deleteUser());
        toast.success("logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-6">
      <div className="flex gap-4">
        <div
          onClick={handleGoogleLogIn}
          className="flex h-12 w-56 gap-4 justify-center items-center border-[1px] rounded-md cursor-pointer duration-300 hover:border-gray-400 active:bg-gray-300"
        >
          <FcGoogle size={"1.5rem"} />
          <p>Sign in with Google</p>
        </div>
        <button
          onClick={handleSignOut}
          className="bg-black text-white cursor-pointer rounded-md w-32 tracking-wider active:bg-gray-800 duration-150"
        >
          Sign out
        </button>
      </div>
      <div className="flex gap-4">
        {" "}
        <div className="flex h-12 w-56 gap-4 justify-center items-center border-[1px] rounded-md cursor-pointer duration-300 hover:border-gray-400 active:bg-gray-300">
          <FaGithub size={"1.5rem"} />
          <p>Sign in with Github</p>
        </div>
        <button className="bg-black text-white cursor-pointer rounded-md w-32 tracking-wider active:bg-gray-800 duration-150">
          Sign out
        </button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;
