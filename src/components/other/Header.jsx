const Header = (props) => {
  const name = props.data?.firstName || "Admin";

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser(null);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div className="flex-1">
        <h1 className="text-lg text-slate-400 font-regular">Welcome back</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
          {name} <span className="text-2xl">👋</span>
        </h2>
      </div>
      <button
        onClick={logOutUser}
        className="px-6 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-500/50 text-red-400 hover:text-red-300 font-semibold rounded-lg transition duration-200 text-sm md:text-base"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
