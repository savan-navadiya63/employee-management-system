const TaskListNumbers = ({ data }) => {
  const stats = [
    {
      label: "New Tasks",
      value: data?.taskNumbers?.newTask || 0,
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400",
      icon: "📋",
    },
    {
      label: "Active Tasks",
      value: data?.taskNumbers?.active || 0,
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      textColor: "text-amber-400",
      icon: "⚡",
    },
    {
      label: "Completed",
      value: data?.taskNumbers?.completed || 0,
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      textColor: "text-emerald-400",
      icon: "✅",
    },
    {
      label: "Failed",
      value: data?.taskNumbers?.failed || 0,
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      textColor: "text-red-400",
      icon: "❌",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`${stat.bgColor} border ${stat.borderColor} rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-opacity-60 transition duration-200`}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-2">
                {stat.label}
              </p>
              <p className={`text-3xl md:text-4xl font-bold ${stat.textColor}`}>
                {stat.value}
              </p>
            </div>
            <span className="text-3xl opacity-50">{stat.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskListNumbers;
