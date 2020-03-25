
/**
 * Métodos HTTP : 
 * GET : Busca  / listar uma informação no back-end 
 * Post : Criar uma informação no back-end
 * PUT : Alterar uma informação no back-end
 * DELETE : Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros : 
  * 
  * Query Params : Parâmetros nomeados eviados na rota após o *?* (Filtros , Paginação )
  * Route Params : Parâmetros utilizados para identificar recursos
  * Request Body : Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL : MySQL , SQLite , PostgreSQL , Oracle , Microsoft SQL Server
   * NoSQL : MongoDB , CouchDB , etc 
   */

   /**
    * Driver : SELECT * FROM user
    * Query Builder : table ('users').select('*').where()
    */
  const cors = require ('cors');
   const express = require('express');
  const routes = require('./routes');
 const app = express();


   app.use(cors());
   app.use(express.json());
   app.use(routes);

   app.listen(3333);