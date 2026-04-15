function Button({destination, active}) {
  return active ? (
    <button className="text-(--text-main) bg-linear-to-r from-[#ffb59d] to-[#f06536] rounded-lg shadow-[0_0_20px_rgba(240,101,54,0.3)] flex items-center space-x-3 p-3 font-['Arial'] font-medium text-sm tracking-wide transition-transform duration-200 scale-95 active:scale-90 cursor-pointer w-full">
      {destination}
    </button>
  ) : (
    <button className="text-(--text-main) rounded-lg flex items-center space-x-3 p-3 font-['Arial'] font-medium text-sm tracking-wide transition-transform duration-200 scale-95 active:scale-90 cursor-pointer w-full hover:shadow-[0_0_25px_rgba(240,101,54,0.5)]">
      {destination}
    </button>
  );
}
export default Button;
