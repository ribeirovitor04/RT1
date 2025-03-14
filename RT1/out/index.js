"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var descritorEmpresa_1 = __importDefault(require("./descritorEmpresa"));
var empresa_1 = __importDefault(require("./empresa"));
var endereco_1 = __importDefault(require("./endereco"));
var funcionario_1 = __importDefault(require("./funcionario"));
var telefone_1 = __importDefault(require("./telefone"));
var endereco = new endereco_1.default('Sao Paulo', 'Jardim Paulista', 'Av. Paulista', 123);
var telefone = new telefone_1.default('011', '9-9999-8888');
var funcionario = new funcionario_1.default('Tony Stark', '123456789', '000.000.000-00', endereco, telefone);
var funcionarios = [funcionario];
var telefones = [telefone];
var empresa = new empresa_1.default('ABC LTDA', 'Mercado Online', '111.111.111.111-11', endereco, funcionarios, telefones);
var descitor = new descritorEmpresa_1.default;
descitor.descrever(empresa);
