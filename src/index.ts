import express from 'express';
import * as swaggerUi from 'swagger-ui-express';
const swaggerDocument = require('../swagger.json');
import { json } from 'body-parser';
import { connectDB } from './common/config/database';
import { Routes } from './common/routes';

const app = express();
const port = 3001;

app.use(json());

connectDB();

app.use(Routes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port,()=>{
    console.log(`Server is listeing on ${port}`);
});

