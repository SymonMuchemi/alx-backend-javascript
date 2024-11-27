import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {

    const studentsData = await readDatabase()

    return response.status(200).send('This is the list of students');
  }
}

module.exports = StudentsController;
