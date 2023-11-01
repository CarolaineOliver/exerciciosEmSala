class Animal {
  constructor(cor, tamanho, peso) {
    this._cor = cor;
    this._tamanho = tamanho;
    this._peso = peso;
  }
  dormir() {
    console.log("Dormir");
  }
}
class Passaro extends Animal {
  constructor(bico, cor, tamanho, peso) {
    super(cor, tamanho, peso);
    this.bico = bico;
  }
  voar() {
    console.log("Voar");
  }
}
class Papagaio extends Passaro {
  constructor(sabeFalar, cor, tamanho, peso, bico) {
    super(bico, cor, tamanho, peso);
    this.sabeFalar = sabeFalar;
  }
  falar() {
    console.log("Falar");
  }
}

class Avestruz extends Passaro{
  constructor(){
    super('grande', 'branco e preto', 250, 1500)
  }
  voar(){
    console.log('Não sabe voar')
  }
}

class Peixe extends Animal{
  constructor(tipoAgua, cor, tamanho, peso){
  super(cor, tamanho, peso)
  this._tipoAgua = tipoAgua
  }
  dormir(){
    console.log("Dorme de olho aberto")
  }

}

class PeixeDourado extends Peixe{
  constructor(tamanho, peso){
    super('doce', 'dourado', tamanho, peso)
  }
}


let papagaio = new Papagaio(true, "verde", 25, 350, "medio");
console.log(papagaio);
let papagaio2 = new Papagaio(false, "Branco", 10, 80, "grande");
console.log(papagaio2);
let peixe = new Peixe('salgada', 'cinza', 'grande', 200)
console.log(peixe)
peixe.dormir()
let peixe2 = new PeixeDourado(50, 20)
console.log(peixe2)
let peixe3 = new PeixeDourado(60, 30)
console.log(peixe3)
