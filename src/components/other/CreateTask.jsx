import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTO, setAsingTO] = useState("");
  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const submintHander = (e) => {
    e.preventDefault();

    const task = {
      title: taskTitle,
      date: taskDate,
      category,
      description: taskDescription,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedData = userData.map((elem) => {
      if (asignTO === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, task],
          taskNumbers: {
            ...elem.taskNumbers,
            newTask: elem.taskNumbers.newTask + 1,
          },
        };
      }
      return elem;
    });

    setUserData(updatedData);

  
    setTaskTitle("");
    setTaskDate("");
    setAsingTO("");
    setCategory("");
    setTaskDescription("");
  
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6">Create New Task</h2>
      <form onSubmit={submintHander} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Task Title */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="e.g., Design homepage"
              className="w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition duration-200"
              type="text"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Due Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition duration-200"
              type="date"
              required
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Assign To
            </label>
            <input
              value={asignTO}
              onChange={(e) => setAsingTO(e.target.value)}
              placeholder="e.g., John Doe"
              className="w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition duration-200"
              type="text"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g., Design, Development"
              className="w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition duration-200"
              type="text"
              required
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Description
          </label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Describe the task in detail..."
            className="w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition duration-200 resize-none h-32"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
