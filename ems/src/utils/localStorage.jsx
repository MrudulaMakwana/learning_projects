const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        title: "Task 1",
        description: "Complete the report",
        date: "2024-12-25",
        category: "Work",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Task 2",
        description: "Attend meeting",
        date: "2024-12-26",
        category: "Meeting",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Task 3",
        description: "Update database",
        date: "2024-12-27",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstname: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Task 1",
        description: "Fix bugs",
        date: "2024-12-25",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        title: "Task 2",
        description: "Plan team outing",
        date: "2024-12-26",
        category: "HR",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstname: "Vivaan",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Task 1",
        description: "Draft email",
        date: "2024-12-25",
        category: "Communication",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Task 2",
        description: "Review code",
        date: "2024-12-26",
        category: "Development",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 3",
        description: "Submit feedback",
        date: "2024-12-27",
        category: "Admin",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstname: "Ananya",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        title: "Task 1",
        description: "Schedule meeting",
        date: "2024-12-25",
        category: "Admin",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      },
      {
        title: "Task 2",
        description: "Prepare presentation",
        date: "2024-12-26",
        category: "Work",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstname: "Diya",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Task 1",
        description: "Organize files",
        date: "2024-12-25",
        category: "Admin",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Task 2",
        description: "Train new employees",
        date: "2024-12-26",
        category: "HR",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Task 3",
        description: "Update policies",
        date: "2024-12-27",
        category: "Admin",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];


const admin = [
  {
    id: "admin1",
    firstname:'Admin',
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")); // Parse the stored string
  const admin = JSON.parse(localStorage.getItem("admin")); // Parse the stored string

  return { admin, employees };
};
