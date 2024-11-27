const router = require('express').Router;
const StudentsController = require('../controllers/StudentsController');
const AppController = require('../controllers/AppController');

const mainRouter = router();

mainRouter.get('/', AppController.getHomePage);
mainRouter.get('/students', StudentsController.getAllStudents);
mainRouter.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = mainRouter;
