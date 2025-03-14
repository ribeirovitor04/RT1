import Descritor from "./descritorEmpresa";
import Empresa from "./empresa";
import Endereco from "./endereco";
import Funcionario from "./funcionario";
import Telefone from "./telefone";

let endereco = new Endereco('Sao Paulo', 'Jardim Paulista', 'Av. Paulista', 123)
let telefone = new Telefone('011', '9-9999-8888')
let funcionario = new Funcionario('Tony Stark', '123456789', '000.000.000-00', endereco, telefone)
let funcionarios = [funcionario]
let telefones = [telefone]
let empresa = new Empresa('ABC LTDA', 'Mercado Online', '111.111.111.111-11', endereco, funcionarios, telefones)

let descitor = new Descritor
descitor.descrever(empresa)