

const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e@e.com",
    password: "123",
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        title: "Prepare Report",
        description: "Prepare monthly sales report",
        date: "2026-04-25",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Meeting",
        description: "Attend meeting with client",
        date: "2026-04-26",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix Bug",
        description: "Resolve login issue",
        date: "2026-04-27",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@gmail.com",
    password: "123",
    taskNumbers: { active: 2, newTask: 2, completed: 1, failed: 1 },
    tasks: [
      {
        title: "Design UI",
        description: "Create homepage UI",
        date: "2026-04-24",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update Logo",
        description: "Modify company logo",
        date: "2026-04-23",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Team Call",
        description: "Weekly sync meeting",
        date: "2026-04-22",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Documentation",
        description: "Write component docs",
        date: "2026-04-28",
        category: "Writing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@gmail.com",
    password: "123",
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        title: "Write Code",
        description: "Develop API endpoints",
        date: "2026-04-21",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code Review",
        description: "Review teammate code",
        date: "2026-04-20",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix Crash",
        description: "Resolve app crash issue",
        date: "2026-04-19",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@gmail.com",
    password: "123",
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        title: "Database Backup",
        description: "Backup production database",
        date: "2026-04-18",
        category: "Database",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Optimize Query",
        description: "Improve DB performance",
        date: "2026-04-17",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Server Check",
        description: "Monitor server health",
        date: "2026-04-16",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@gmail.com",
    password: "123",
    taskNumbers: { active: 2, newTask: 2, completed: 1, failed: 1 },
    tasks: [
      {
        title: "Marketing Plan",
        description: "Create marketing strategy",
        date: "2026-04-15",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Social Media Post",
        description: "Post campaign update",
        date: "2026-04-14",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Ad Campaign",
        description: "Run Facebook ads",
        date: "2026-04-13",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Customer Support",
        description: "Resolve user query",
        date: "2026-04-29",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const Admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(Admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
