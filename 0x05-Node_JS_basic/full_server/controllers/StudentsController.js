import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const studentsData = await readDatabase('./database.csv');

      if (studentsData.length === 0) {
        return response.status(500).send('Cannot load database: inside');
      }

      let message = 'This is the list of students';

      const fields = Object.keys(studentsData).sort((a, b) => a - b);

      for (const field of fields) {
        const list = studentsData[field];
        // console.log(list);

        message += `\nNumber of students in ${field}: ${
          list.length
        }. List: ${list.join(', ')}`;
      }
      return response.status(200).send(message);
    } catch (error) {
      // console.log(error.message);
      return response.status(500).send('Cannot load database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const { major } = request.params;
      const lastCommandLineArgumentIndex = process.argv.length - 1;
      const studentsData = await readDatabase(
        process.argv[lastCommandLineArgumentIndex],
      );

      if (studentsData.length === 0) {
        return response.status(500).send('Cannot load database');
      }

      let message = '';

      const field = Object.keys(studentsData).filter((f) => f === major);

      const list = studentsData[field];
      message += `List: ${list.join(', ')}`;

      return response.status(200).send(message);
    } catch (error) {
      return response.status(500).send('Cannot load database');
    }
  }
}

module.exports = StudentsController;
