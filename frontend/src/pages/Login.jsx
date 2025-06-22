import LoginForm from "../components/LoginForm";
import logo from "../assets/lemonpay-logo.png";
import Ellipse3 from "../assets/Ellipse3.png";
import Ellipse2 from "../assets/Ellipse 2.png";
import Ellipse1 from "../assets/Ellipse 1.png";

const Login = () => {
  return (
    <div
      className="h-screen w-screen  px-4 py-6 md:px-16 text-white relative overflow-hidden font-nunito"
      style={{
        background:
          "linear-gradient(151.08deg, #FFFFFF 15.71%, #183BA3 56.01%)",
        backgroundBlendMode: "lighten",
      }}
    >
    {/* // <div className="h-screen w-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-800 px-4 py-6 md:px-16 text-white relative overflow-hidden"> */}

      <div className="flex flex-col md:flex-row h-full w-full">
        {/* Left Section */}
        <div className="md:w-3/4 relative flex flex-col justify-start md:justify-between pt-6 md:pt-6">
          {/* Ellipse */}

          <img
            src={Ellipse1}
            alt="Background blob"
            className="absolute top-[-80px] right-[-710px] w-[192px] h-[192px] opacity-20 z-10 object-contain rounded-full"
          />
          <img
            src={Ellipse2}
            alt="Background blob"
            className="absolute bottom-[-110px] right-[100px] w-[192px] h-[252px] opacity-20 z-0 object-contain rounded-full"
          />

          <img
            src={Ellipse3}
            alt="Background blob"
            className="absolute bottom-[-80px] left-[-80px] w-[192px] h-[192px] opacity-20 z-0 object-contain rounded-full"
          />
          {/* Logo Wrapper */}
          <div className="flex justify-center md:justify-start">
            <img
              src={logo}
              alt="Lemonpay Logo"
              className="w-2/3 md:w-2/3 max-w-[329px] h-auto border-none outline-none shadow-none"
            />
          </div>

          {/* Slogan: visible on desktop only */}
          <div className="hidden md:block max-w-[600px] mt-16 py-6 md:py-48 px-6 md:px-12">
            <h1 className="font-nunito text-3xl md:text-4xl font-semibold leading-tight">
              Join{" "}
              <span className="text-4xl font-bold">
                1000<sup>+</sup>
              </span>
              {""}
              Businesses
            </h1>
            {/* <p className="text-yellow-300 text-4xl font-semibold mt-2 leading-snug"> */}
            <p className="text-yellow-300 text-3xl md:text-4xl font-semibold mt-2 leading-snug font-nunito">
              Powering Growth with <span className="text-white">Lemonpay!</span>
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 flex justify-center items-center px-4 md:px-16 py-10 relative z-10">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
