import bgVideo from "../video/knife.mp4";
import { useLogin } from "../hooks/useLogin";
import { useRef } from "react";
//spinner
import Loader from "../components/Loader";
//react-icons
import { FcGoogle } from "react-icons/fc";

function Login() {
  const { login, isPending, enterWithGoogle } = useLogin();
  const password = useRef();
  const email = useRef();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email.current.value, password.current.value);

    form.current.reset();
  };
  const handleWithGoogle = (e) => {
    e.preventDefault();
    enterWithGoogle();
  };

  return (
    <>
      <div className="h-screen relative">
        <video
          className="absolute h-screen w-screen object-cover z-[-1]"
          muted
          autoPlay
          loop
          src={bgVideo}
        ></video>
        <div className="grid place-items-center w-full h-screen bg-black bg-opacity-20">
          <div className="bg-white p-8 bg-opacity-60 rounded-md max-w-md w-full">
            <h1 className="text-4xl mb-4 text-center text-black">Login</h1>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <label className="form-label">
                <span>Your email</span>
                <input
                  ref={email}
                  type="email"
                  placeholder="Enter your email"
                />
              </label>
              <label className="form-label">
                <span>Your password</span>
                <input
                  ref={password}
                  type="password"
                  placeholder="Enter your password"
                />
              </label>
              <button className="flex items-center justify-center text-white btn bg-emerald-600 py-2 px-3 rounded-md text-lg">
                {isPending ? <Loader /> : "Login"}
              </button>
              <button
                onClick={handleWithGoogle}
                className="flex items-center gap-2 justify-center btn bg-emerald-900 py-2 px-3 rounded-md text-lg text-white"
              >
                <FcGoogle className="text-2xl" /> Enter with Google
              </button>
              <p className="text-center text-base">
                Don't have an account?
                <a className="text-lime-700 ml-2" href="/signup">
                  Signup
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
