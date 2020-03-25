const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();
/**Listagem de ONGS
routes.get('/ongs' , async (request,response) => {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
});*/

//Cadastro das ONGS
routes.post('/sessions',SessionController.create);
routes.post('/ongs',OngController.create);
routes.get('/ongs',OngController.index)
routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);
routes.get('/profile',ProfileController.index);
module.exports = routes ;