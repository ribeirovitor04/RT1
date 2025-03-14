"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Descritor = /** @class */ (function () {
    function Descritor() {
    }
    Descritor.prototype.descrever = function (empresa) {
        console.log("Raz\u00E3o Social: ".concat(empresa.razaoSocial, "\n") +
            "Nome Fantasia: ".concat(empresa.nomeFantasia, "\n") +
            "CNPJ: ".concat(empresa.cnpj, "\n") +
            "Endere\u00E7o:\n" +
            "Cidade: ".concat(empresa.endereco.cidade, " | Bairro: ").concat(empresa.endereco.bairro, " | Rua: ").concat(empresa.endereco.rua, " | N\u00FAmero: ").concat(empresa.endereco.numero, "\n") +
            "\n" +
            "Funcion\u00E1rios:\n");
        for (var _i = 0, _a = empresa.funcionarios; _i < _a.length; _i++) {
            var funcionario = _a[_i];
            console.log(" Nome: ".concat(funcionario.nome, "\n") +
                " Matr\u00EDcula: ".concat(funcionario.matricula, "\n") +
                " CPF: ".concat(funcionario.cpf, "\n") +
                " Endere\u00E7o:\n" +
                " Cidade: ".concat(funcionario.endereco.cidade, " | Bairro: ").concat(funcionario.endereco.bairro, " | Rua: ").concat(funcionario.endereco.rua, " | N\u00FAmero: ").concat(funcionario.endereco.numero, "\n") +
                " \n");
        }
    };
    return Descritor;
}());
exports.default = Descritor;
