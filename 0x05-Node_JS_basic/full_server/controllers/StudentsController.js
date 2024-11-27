import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const lastCommandLineArgumentIndex = process.argv.length - 1;
      const studentsData = await readDatabase(
        process.argv[lastCommandLineArgumentIndex],
      );

      if (studentsData.length === 0) {
        return response.status(500).send('Cannot load database');
      }

      let message = 'This is the list of students';

      const fields = Object.keys(studentsData).sort((a, b) => a - b);

      for (const field of fields) {
        const list = studentsData.get(field);
        console.log(list);

        message += `\nNumber of students in ${field}: ${
          list.len
        }. List: ${list.join(', ')}`;
      }
      return response.status(200).send(message);
    } catch (error) {
      return response.status(500).send('Cannot load database');
    }
  }
}

module.exports = StudentsController;
