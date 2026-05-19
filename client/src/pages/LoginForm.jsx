import { useState } from "react";
import { useLearningContext } from "../context/LearningContextProvider";
import { X, Mail, Lock, User, Eye, EyeOff } from "lucide-react";

const LoginForm = ({ onClose }) => {
  const { currentState, setCurrentState, setIsLoggedIn } = useLearningContext();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    condition: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentState === "login") {
      console.log("Login Data:", {
        email: formData.email,
        password: formData.password,
      });
      setIsLoggedIn(true)
      onClose()
    } else {
      console.log("Signup Data:", formData);
      setIsLoggedIn(true);
      onClose()
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-fadeIn">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-500 hover:text-gray-700"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="bg-white px-8 pt-8 pb-4 text-center border-b border-gray-100">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            {currentState === "login" ? (
              <Lock size={28} className="text-blue-600" />
            ) : (
              <User size={28} className="text-blue-600" />
            )}
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            {currentState === "login" ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-sm text-gray-500">
            {currentState === "login"
              ? "Login to continue learning"
              : "Start your learning journey today"}
          </p>
        </div>

        {/* Form */}
        <div className="px-8 py-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Fullname */}
            {currentState === "signup" && (
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
            )}

            {/* Email */}
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                required
                className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full border border-gray-200 rounded-xl pl-10 pr-12 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Terms */}
            {currentState === "signup" && (
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  name="condition"
                  checked={formData.condition}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-blue-600 hover:underline"
                  >
                    terms & conditions
                  </button>
                </span>
              </label>
            )}

            {/* Forgot Password */}
            {currentState === "login" && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all text-white font-semibold py-3 rounded-xl shadow-sm hover:shadow-md mt-6"
            >
              {currentState === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8 pt-4 bg-gray-50 border-t border-gray-100">
          {currentState === "login" ? (
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={() => setCurrentState("signup")}
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Sign up for free
              </button>
            </p>
          ) : (
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => setCurrentState("login")}
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Sign in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
