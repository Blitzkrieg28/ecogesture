import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "@/slices/authSlice";

export default function HomePage() {
  const userInfo = useSelector(selectUser);

  const handleRedirect = () => {
    // Redirects to the main.html file in the public directory
    window.location.href = "/main.html"; 
  };

  return (
    <div className="w-full flex justify-center items-center flex-col gap-5 p-8">
      {/* Header Text */}
      <h1 className="text-4xl font-bold text-center mt-8">
        Welcome to Echo Gesture, where communication goes beyond words!
      </h1>

      {/* Main Description */}
      <p className="text-xl text-gray-700 text-center max-w-3xl leading-8 mt-4">
        Our platform is dedicated to bridging the gap between spoken language and the vibrant world of sign language. By seamlessly converting text into sign language, we empower individuals to connect, share, and express themselves with greater accessibility and inclusivity.
      </p>

      {/* Conditional Redirect Button */}
      {userInfo ? (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleRedirect} // Redirects programmatically to main.html
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
          >
            Go to Main Page
          </button>
        </div>
      ) : (
        <div className="flex justify-center mt-6">
          <p className="text-lg text-gray-700">Please sign in to access the main page.</p>
        </div>
      )}
    </div>
  );
}
