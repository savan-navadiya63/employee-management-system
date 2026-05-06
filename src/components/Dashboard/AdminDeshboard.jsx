import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDeshboard = (props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 md:p-8 lg:p-10">
      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto">
        <Header changeUser={props.changeUser} />
        <div className="space-y-8">
          <CreateTask />
          <AllTask />
        </div>
      </div>
    </div>
  );
};

export default AdminDeshboard;
