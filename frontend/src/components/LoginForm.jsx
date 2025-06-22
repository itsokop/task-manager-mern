const LoginForm = () => {
  return (
    <div className="w-full max-w-sm text-center">
      
      {/* Form Section */}
      <h2 className="text-2xl md:text-3xl mb-2 text-left font-nunito">Welcome Login System</h2>
      <p className="text-sm md:text-base mb-6 text-left font-poppins">
        Your gateway to seamless <br/>transactions and easy payments.
      </p>

      <label className="block text-sm mb-1 text-left">Email</label>
      <input
        type="email"
        placeholder="mahadev@lemonpay.tech"
        className="w-full p-3 mb-4 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
      />

      <label className="block text-sm mb-1 text-left">Password</label>
      <input
        type="password"
        placeholder="Min 8 characters"
        className="w-full p-3 mb-4 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none"
      />

      <div className="flex justify-between items-center text-sm mb-4">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <a href="#" className="hover:underline">Sign Up</a>
      </div>

      <button className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-100 transition">
        Sign in
      </button>
    </div>
  );
};

export default LoginForm;
