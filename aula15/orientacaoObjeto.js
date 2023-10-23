class Conta {
  static numeroDeContas = 0;

  constructor(agencia, conta, saldo, limite) {
    this._agencia = agencia;
    this._conta = conta;
    this._saldo = saldo;
    this._limite = limite;
    Conta.IncrementarContas();
  }
  static IncrementarContas() {
    this.numeroDeContas += 1;
  }
  Depositar(valor) {
    this._saldo += valor;
  }
  Sacar(valor) {
    this._saldo -= valor;
  }
  VerificarSaldo() {
    return this._saldo;
  }
  VerificarLimite() {
    return this._limite;
  }
  Transferencia(contaDestino, valor) {
    this.Sacar(valor);
    contaDestino.Depositar(valor);
    return contaDestino;
  }
}

let conta1 = new Conta(1234, 56789, 500, 500);
console.log(conta1);

conta1.Depositar(100);

let conta2 = new Conta(4567, 89012, 2000, 2000);

conta1.Transferencia(conta2, 200);
console.log(conta1);
console.log(conta2);
console.log(Conta.numeroDeContas);
