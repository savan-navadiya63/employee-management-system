import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const AcceptTask = ({ data, employeeEmail, taskIndex }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const updateTaskStatus = (status) => {
    const updated = userData.map((emp) => {
      if (emp.email !== employeeEmail) return emp;

      const currentTask = emp.tasks[taskIndex];
      const taskNumbers = { ...emp.taskNumbers };

      if (currentTask.active)
        taskNumbers.active = Math.max(0, taskNumbers.active - 1);
      if (currentTask.newTask)
        taskNumbers.newTask = Math.max(0, taskNumbers.newTask - 1);
      if (currentTask.completed)
        taskNumbers.completed = Math.max(0, taskNumbers.completed - 1);
      if (currentTask.failed)
        taskNumbers.failed = Math.max(0, taskNumbers.failed - 1);

      taskNumbers[status] = Math.max(0, taskNumbers[status] + 1);

      const updatedTasks = emp.tasks.map((task, idx) => {
        if (idx !== taskIndex) return task;
        return {
          ...task,
          active: false,
          newTask: false,
          completed: status === "completed",
          failed: status === "failed",
        };
      });

      return {
        ...emp,
        tasks: updatedTasks,
        taskNumbers,
      };
    });

    setUserData(updated);
  };

  return (
    <div className="shrink-0 w-80 h-fit bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-slate-600/50 transition duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <span className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-semibold rounded-full">
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

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={() => updateTaskStatus("completed")}
          className="flex-1 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 hover:border-emerald-500/50 text-emerald-400 hover:text-emerald-300 font-semibold text-sm rounded-lg transition duration-200"
        >
          Complete
        </button>
        <button
          onClick={() => updateTaskStatus("failed")}
          className="flex-1 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 hover:border-red-500/50 text-red-400 hover:text-red-300 font-semibold text-sm rounded-lg transition duration-200"
        >
          Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
