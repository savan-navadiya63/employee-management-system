import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  if (!data || !data.tasks)
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-slate-400 text-lg">Loading tasks...</p>
      </div>
    );

  const taskCount = data.tasks.length;

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div>
        <h3 className="text-xl font-bold text-white">
          Your Tasks ({taskCount})
        </h3>
        <p className="text-sm text-slate-400 mt-1">
          Manage and track your assigned work
        </p>
      </div>

      {/* Tasks Container */}
      <div
        id="tasklist"
        className="flex gap-6 pb-4 overflow-x-auto snap-x snap-mandatory"
      >
        {taskCount === 0 ? (
          <div className="w-full flex items-center justify-center py-12">
            <p className="text-slate-400">No tasks assigned yet</p>
          </div>
        ) : (
          data.tasks.map((elem, index) => {
            if (elem.active) {
              return (
                <AcceptTask
                  key={index}
                  data={elem}
                  employeeEmail={data.email}
                  taskIndex={index}
                />
              );
            }

            if (elem.newTask) {
              return <NewTask key={index} data={elem} />;
            }

            if (elem.completed) {
              return <CompleteTask key={index} data={elem} />;
            }

            if (elem.failed) {
              return <FailedTask key={index} data={elem} />;
            }

            return null;
          })
        )}
      </div>
    </div>
  );
};

export default TaskList;
