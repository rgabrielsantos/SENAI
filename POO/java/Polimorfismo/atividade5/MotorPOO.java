package Polimorfismo.atividade5;
//Com base nos conceitos de agregação e composição, implemente as
//classes Motor, Roda e Carro, e desenvolva um programa que:
//● Crie um carro com um motor e quatro rodas.
//● Mostre uma mensagem se o carro está ligado.
//● Explique no final: por que a classe Motor é uma composição e a classe
//Roda é uma agregação?
public class MotorPOO {
    public static void main(String[] args){
        Carro carro = new Carro(4,"Etanol",88);
        Rodas r1 = new Rodas(17,4);

        carro.adicionarRodas(r1);
        carro.ligar();
        carro.exibirInfo();

    }
}
