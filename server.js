const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./app/view/swagger.json');
const bodyParser = require('body-parser');


app.use(express.json());
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', require('./app/routes/index.js'));


const port = 8080;
const server = app.listen(port, () => {
    console.log(`Server ready at localhost:${port}`);
    console.log('[Swagger] http://localhost:' + port + '/api-docs/')
})