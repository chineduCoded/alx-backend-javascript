const getStudentIdsSum = (students) => {
  const idSum = students.reduce((sum, student) => sum + student.id, 0);
  return idSum;
};

export default getStudentIdsSum;
