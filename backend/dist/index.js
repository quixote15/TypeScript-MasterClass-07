"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(cors_1.default());
app.use(routes_1.default);
app.listen(3333);
