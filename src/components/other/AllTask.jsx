import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden shadow-xl">
      {/* Header */}
      <div className="bg-slate-800/80 px-6 py-4 border-b border-slate-700/50">
        <h2 className="text-xl font-bold text-white">All Tasks Overview</h2>
        <p className="text-sm text-slate-400 mt-1">
          Team task distribution and status
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700/50 bg-slate-800/40">
              <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                Employee
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-blue-400">
                New
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-amber-400">
                Active
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-emerald-400">
                Completed
              </th>
              <th className="text-left px-6 py-4 text-sm font-semibold text-red-400">
                Failed
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((elem, idx) => (
              <tr
                key={idx}
                className="border-b border-slate-700/30 hover:bg-slate-700/20 transition duration-150"
              >
                <td className="px-6 py-4 text-sm font-medium text-slate-100">
                  {elem.firstName}
                </td>
                <td className="px-6 py-4 text-sm text-blue-400 font-semibold">
                  {elem.taskNumbers.newTask}
                </td>
                <td className="px-6 py-4 text-sm text-amber-400 font-semibold">
                  {elem.taskNumbers.active}
                </td>
                <td className="px-6 py-4 text-sm text-emerald-400 font-semibold">
                  {elem.taskNumbers.completed}
                </td>
                <td className="px-6 py-4 text-sm text-red-400 font-semibold">
                  {elem.taskNumbers.failed}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
