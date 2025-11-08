export default function Button({ label }) {
  return (
    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
      {label}
    </button>
  );
}
