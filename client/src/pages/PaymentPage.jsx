import { useState } from "react";
import {
  Smartphone,
  CreditCard,
  CheckCircle,
  ArrowLeft,
  Shield,
  Lock,
  Phone,
  Wallet,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const paymentOptions = {
    mobileMoney: [
      { id: "mtn", label: "MTN Mobile Money", provider: "mtn" },
      { id: "telecel", label: "Telecel Cash", provider: "telecel" },
      { id: "airteltigo", label: "AirtelTigo Cash", provider: "airteltigo" },
    ],
    card: [{ id: "card", label: "Debit / Credit Card" }],
  };

  const selectedOption = [
    ...paymentOptions.mobileMoney,
    ...paymentOptions.card,
  ].find((option) => option.id === paymentMethod);

  const getProviderColor = (providerId) => {
    switch (providerId) {
      case "mtn":
        return "border-yellow-400 bg-yellow-50";
      case "telecel":
        return "border-red-400 bg-red-50";
      case "airteltigo":
        return "border-green-400 bg-green-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  const getProviderIcon = (providerId) => {
    switch (providerId) {
      case "mtn":
        return "";
      case "telecel":
        return "";
      case "airteltigo":
        return "";
      default:
        return <Phone size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back to course</span>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard size={28} className="text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Select Payment Method
          </h1>
          <p className="text-gray-500">
            Choose how you'd like to pay for your course
          </p>
        </div>

        {/* Mobile Money Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6 overflow-hidden">
          <div className="flex items-center gap-3 p-5 border-b border-gray-100 bg-gray-50">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Phone size={20} className="text-purple-600" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Mobile Money</h2>
              <p className="text-xs text-gray-500">
                Pay with your mobile wallet
              </p>
            </div>
          </div>

          <div className="p-4 space-y-3">
            {paymentOptions.mobileMoney.map((option) => (
              <label
                key={option.id}
                className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  paymentMethod === option.id
                    ? `${getProviderColor(option.provider)} border-blue-500 ring-2 ring-blue-500/20`
                    : "border-gray-200 hover:border-purple-300 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={option.id}
                  checked={paymentMethod === option.id}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                />
                <div className="ml-3 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">
                      {getProviderIcon(option.provider)}
                    </span>
                    <span className="text-gray-700 font-medium">
                      {option.label}
                    </span>
                  </div>
                </div>
                {paymentMethod === option.id && (
                  <CheckCircle size={20} className="text-blue-600" />
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Card Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6 overflow-hidden">
          <div className="flex items-center gap-3 p-5 border-b border-gray-100 bg-gray-50">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <CreditCard size={20} className="text-blue-600" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Card Payment</h2>
              <p className="text-xs text-gray-500">
                Pay with debit or credit card
              </p>
            </div>
          </div>

          <div className="p-4 space-y-3">
            {paymentOptions.card.map((option) => (
              <label
                key={option.id}
                className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  paymentMethod === option.id
                    ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500/20"
                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={option.id}
                  checked={paymentMethod === option.id}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <div className="ml-3 flex-1">
                  <div className="flex items-center gap-2">
                    <CreditCard size={16} className="text-gray-500" />
                    <span className="text-gray-700 font-medium">
                      {option.label}
                    </span>
                  </div>
                </div>
                {paymentMethod === option.id && (
                  <CheckCircle size={20} className="text-blue-600" />
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Security Notice */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Shield size={14} className="text-gray-400" />
          <p className="text-xs text-gray-400">
            Your payment info is secure and encrypted
          </p>
        </div>

        {/* Selected Payment Method Summary */}
        {selectedOption && (
          <div className="bg-blue-600 rounded-xl p-6 mb-6 shadow-lg">
            <p className="text-blue-100 text-sm mb-2">
              Selected Payment Method:
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                {selectedOption.id === "card" ? (
                  <CreditCard size={20} className="text-white" />
                ) : (
                  <Phone size={20} className="text-white" />
                )}
              </div>
              <p className="text-white text-xl font-semibold">
                {selectedOption?.label}
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setPaymentMethod("")}
            className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              if (paymentMethod !== "") {
                navigate("/resource");
              }
            }}
            disabled={!paymentMethod}
            className={`flex-1 py-3 px-6 rounded-xl font-medium shadow-sm transition-all duration-200 flex items-center justify-center gap-2 ${
              paymentMethod
                ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md"
                : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
            }`}
          >
            <Lock size={16} />
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
