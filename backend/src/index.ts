/**
 * Quando utilizamos TS as bibliotecas também precisam expor/declarar suas tipagens
 * 1. Geralmente existe um repositório com os tipos da bibliotecas
 * 2. As libs podem implementar as tipagens no mesmo repo 
 * 
 * Por exemplo, O express possui um repo @types/express
 * Caso os tipos nao estejam presentes o intelisence pode acusar erros de tipagem
 * 
 * Libs para transpilar JS: 
 * 1 - sucrase: Muito rápido e só faz transpilaçao.
 * 2 - ts-node-dev: Transpila algumas syntax nao suportadas pelo sucrase como decorators
 */
import express from 'express';
import routes from './routes'
import cors from 'cors';
const app = express();

app.use(cors());

app.use(routes);

app.listen(3333)