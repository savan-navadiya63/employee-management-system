import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDeshboard = (props) => {
  const [userData] = useContext(AuthContext);
  const currentData =
    userData.find((emp) => emp.email === props.data?.email) || props.data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 md:p-8 lg:p-10">
      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto">
        <Header changeUser={props.changeUser} data={props.data} />
        <div className="space-y-8">
          <TaskListNumbers data={currentData} />
          <TaskList data={currentData} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDeshboard;
