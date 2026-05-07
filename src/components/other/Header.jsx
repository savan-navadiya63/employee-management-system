const Header = (props) => {
  const name = props.data?.firstName || "Admin";

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser(null);
  };

  return (
    <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
      <div className="flex-1 min-w-0">
        <h1 className="text-lg text-slate-400 font-regular">Welcome back</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
          {name} <span className="text-2xl">👋</span>
        </h2>
      </div>

      <button
        onClick={logOutUser}
        className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-red-700 hover:bg-red-500 text-white font-semibold shadow-lg shadow-red-900/30 transition-all duration-200 whitespace-nowrap"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
