const Button = ({ text }) => {
  return (
    <button className="w-60 h-14 bg-yellow-500 font-bold text-black rounded-lg shadow-md hover:bg-yellow-600 transition cursor-pointer text-xl">
      {text}
    </button>
  );
}
export default Button;