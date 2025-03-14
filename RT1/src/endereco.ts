class Endereco {
    public rua: string
    public bairro: string
    public cidade: string
    public numero: number

    constructor(
        cidade: string,
        bairro: string,
        rua: string,
        numero: number
    ) {
        this.cidade = cidade
        this.bairro = bairro
        this.rua = rua
        this.numero = numero
    }
}

export default Endereco