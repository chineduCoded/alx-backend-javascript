const getStudentsByLocation = (students, city) => {
  const arrayFilter = students.filter((student) => student.location === city);
  return arrayFilter;
};

export default getStudentsByLocation;
