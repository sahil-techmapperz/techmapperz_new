"use client";
import { useRouter } from 'next/navigation';
import { FiCheckCircle } from 'react-icons/fi';

const ThankYou = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <FiCheckCircle className="text-green-500 w-16 h-16 animate-bounce" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Thank You!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We appreciate your response. You will hear from us shortly.
        </p>
        <button
          onClick={handleGoBack}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Go Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
