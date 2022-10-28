export class ContaCorrente {
    agencia;
    cliente;

    //atributo privado "#nameExample";
    #saldo = 0;

    //Métodos (funções)
    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            //early return
            return;
        }
        this.#saldo += valor;
        console.log(this.#saldo)
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
