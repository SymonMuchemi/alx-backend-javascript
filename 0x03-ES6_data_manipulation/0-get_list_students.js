export default function getListStudents() {
  const students = [
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
    },
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia',
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Francisco',
    },
  ];

  const map = new Map();

  for (let i = 0; i < students.length; i += 1) {
    map.set(i, students[i]);
  }

  return Array.from(map.values());
}
