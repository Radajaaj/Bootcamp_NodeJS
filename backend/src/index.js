import express from 'express';
import { routes } from './controllers/index.js';
import { init } from './db/init.js';

const app  = express();
const PORT = 3000;

init();

app.use(routes);

app.listen(PORT, () => {
    console.log("Servidor rodando na porta: ", PORT)
})