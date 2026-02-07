function StudentCard({ name, department, gpa }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Bölüm: {department}</p>
      <p>Not Ortalaması: {gpa}</p>
    </div>
  );
}

export default StudentCard;
