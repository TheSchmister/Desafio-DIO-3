class Heroi {       //Criei a classe Herói.  É um encapsulamento das propriedades de um herói para uso posterior no nosso código.
    constructor(nome, idade, tipo) {  //o constructor é um método que inicializa as propriedades iniciais da classe(nome, idade e tipo do herói).
      this.nome = nome;  //Atribui o valor do parâmetro "nome" à propriedade "nome" do objeto.
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {  //método que determina o tipo de ataque com base no tipo do herói
      let ataque;
  
      if (this.tipo === 'mago') {
        ataque = 'usou magia';
      } else if (this.tipo === 'guerreiro') {
        ataque = 'usou espada';
      } else if (this.tipo === 'monge') {
        ataque = 'usou artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'usou shuriken';
      } else {
        ataque = 'ataque desconhecido';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso:
  const heroiMago = new Heroi('Merlin', 100, 'mago');  //Quando eu crio o Mago usando o 'new', o constructor é chamado e inicializa as propriedades da classe com os valores fornecidos.
  const heroiGuerreiro = new Heroi('Arthur', 30, 'guerreiro');

heroiMago.atacar(); //Chamamos o método atacar com a constante heroiMago.
heroiGuerreiro.atacar();