import Empresa from "./empresa";

class Descritor {
    descrever(empresa) {
        console.log(
            `Razão Social: ${empresa.razaoSocial}\n` +
            `Nome Fantasia: ${empresa.nomeFantasia}\n` +
            `CNPJ: ${empresa.cnpj}\n` +
            `Endereço:\n` +
            `Cidade: ${empresa.endereco.cidade} | Bairro: ${empresa.endereco.bairro} | Rua: ${empresa.endereco.rua} | Número: ${empresa.endereco.numero}\n` +
            `\n` +
            `Funcionários:\n`
        );

        for (let funcionario of empresa.funcionarios) {
            console.log(
                ` Nome: ${funcionario.nome}\n` +
                ` Matrícula: ${funcionario.matricula}\n` +
                ` CPF: ${funcionario.cpf}\n` +
                ` Endereço:\n` +
                ` Cidade: ${funcionario.endereco.cidade} | Bairro: ${funcionario.endereco.bairro} | Rua: ${funcionario.endereco.rua} | Número: ${funcionario.endereco.numero}\n` +
                ` \n`
            );
        }
    }
}

export default Descritor;