import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen p-[4.8rem]">
      <div className="bg-gray-300 p-[4.8rem] w-1/2 text-center rounded-[7px] mb-14 text-2xl">
        <h1 className="font-bold "> Page Not Found 🧐</h1>
        <button
          className="bg-gray-800 py-2 px-4 text-white rounded hover:bg-sky-800 mt-6"
          onClick={() => navigate("/home")}
        >
          ← Go back
        </button>
      </div>
    </div>
  );
}
