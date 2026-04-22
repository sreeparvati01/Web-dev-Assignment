import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", marks: 80 },
    { id: 2, name: "Priya", marks: 35 },
    { id: 3, name: "Amit", marks: 50 }
  ]);

  // Add student
  const addStudent = (name, marks) => {
    const newStudent = {
      id: Date.now(),
      name,
      marks: Number(marks)
    };
    setStudents([...students, newStudent]);
  };

  // Update marks
  const updateMarks = (id, newMarks) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, marks: Number(newMarks) } : s
    );
    setStudents(updated);
  };

  // Stats
  const total = students.reduce((sum, s) => sum + s.marks, 0);
  const average = students.length ? (total / students.length).toFixed(2) : 0;
  const passed = students.filter((s) => s.marks >= 40).length;
  const failed = students.filter((s) => s.marks < 40).length;

  return (
    <div className="container">
      <Header />

      <AddStudentForm addStudent={addStudent} />

      <div className="stats">
        <p>Total Marks: {total}</p>
        <p>Average: {average}</p>
        <p>Passed: {passed}</p>
        <p>Failed: {failed}</p>
      </div>

      <StudentTable students={students} updateMarks={updateMarks} />
    </div>
  );
}

export default App;