import { useState } from "react";
import { Smartphone, CreditCard, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  // Default selected payment method
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate()

  const paymentOptions = {
    mobileMoney: [
      { id: "mtn", label: "MTN Mobile Money" },
      { id: "telecel", label: "Telecel Cash" },
      { id: "airteltigo", label: "AirtelTigo Cash" },
    ],
    card: [{ id: "card", label: "Debit / Credit Card" }],
  };

  // Find the currently selected payment option
  const selectedOption = [
    ...paymentOptions.mobileMoney,
    ...paymentOptions.card,
  ].find((option) => option.id === paymentMethod);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Select Payment Method
          </h1>
          <p className="text-gray-600">Choose how you'd like to pay</p>
        </div>

        {/* Mobile Money Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Smartphone className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-800">
              Mobile Money
            </h2>
          </div>

          <div className="space-y-3">
            {paymentOptions.mobileMoney.map((option) => (
              <label
                key={option.id}
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  paymentMethod === option.id
                    ? "border-purple-600 bg-purple-50"
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
                <span className="ml-3 text-lg text-gray-700">
                  {option.label}
                </span>

                {paymentMethod === option.id && (
                  <CheckCircle className="w-5 h-5 text-purple-600 ml-auto" />
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Card Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">Card</h2>
          </div>

          <div className="space-y-3">
            {paymentOptions.card.map((option) => (
              <label
                key={option.id}
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                  paymentMethod === option.id
                    ? "border-blue-600 bg-blue-50"
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
                <span className="ml-3 text-lg text-gray-700">
                  {option.label}
                </span>

                {paymentMethod === option.id && (
                  <CheckCircle className="w-5 h-5 text-blue-600 ml-auto" />
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Selected Payment Method Summary */}
        <div className="bg-primary shadow-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">
            Selected Payment Method:
          </h3>

          <div className="flex items-center gap-2">
            {paymentMethod === "card" ? (
              <CreditCard className="w-6 h-6" />
            ) : (
              <Smartphone className="w-6 h-6" />
            )}

            <p className="text-xl font-medium">{selectedOption?.label}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button onClick={() => setPaymentMethod("")} className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium">
            Cancel
          </button>

          <button
          onClick={() => {if(paymentMethod !== ""){
              navigate("/resource")
          }}}
            disabled={!paymentMethod}
            className={`flex-1 py-3 px-6 rounded-lg font-medium shadow-md transition-all duration-200 ${
              paymentMethod
                ? "bg-primary text-white hover:bg-primary-dull"
                : "bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
            }`}
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
