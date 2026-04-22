import StudentRow from "./StudentRow";

function StudentTable({ students, updateMarks }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Marks</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <StudentRow key={s.id} student={s} updateMarks={updateMarks} />
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;