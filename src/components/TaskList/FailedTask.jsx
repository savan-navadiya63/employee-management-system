const FailedTask = ({ data }) => {
  return (
    <div className="shrink-0 w-80 h-fit bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-slate-600/50 transition duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span className="inline-block px-3 py-1 bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-semibold rounded-full">
          {data.category}
        </span>
        <span className="text-xs text-slate-400">{data.date}</span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-white mb-3">{data.title}</h2>

      {/* Description */}
      <p className="text-sm text-slate-300 mb-5 line-clamp-3">
        {data.description}
      </p>

      {/* Action */}
      <button className="w-full px-4 py-2.5 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 hover:border-red-500/50 text-red-400 hover:text-red-300 font-semibold text-sm rounded-lg transition duration-200">
        ✗ Failed
      </button>
    </div>
  );
};

export default FailedTask;
