import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const DonationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            {/* Close Button */}
            <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-600">
              <FaTimes size={20} />
            </button>

            <h2 className="text-lg font-semibold mb-4">Make a Donation</h2>

            {/* Payment Details */}
            <form className="space-y-4">
              <label className="block">
                <span className="text-gray-700">Amount:</span>
                <input type="number" className="w-full p-2 border rounded" placeholder="Enter amount" />
              </label>

              <label className="block">
                <span className="text-gray-700">Payment Method:</span>
                <select className="w-full p-2 border rounded">
                  <option>Credit Card</option>
                  <option>PayPal</option>
                  <option>Bank Transfer</option>
                </select>
              </label>

              <button type="submit" className="bg-green-600 text-white w-full py-2 rounded">Donate</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationPopup;