package Simulado2;
//Requisitos do Sistema:
//
//1. Criar uma classe abstrata chamada ContaBancaria
//Atributos:
//titular: Nome do cliente.
//saldo: Saldo disponível na conta.
//------------------------------------
//Métodos:
//depositar(double valor): Adiciona o valor ao saldo.
//sacar(double valor): Método abstrato que será implementado nas subclasses.
//exibirInfo(): Método abstrato para exibir detalhes
// da conta.
//----------------------------------------

abstract public class Conta_Bancaria {
    protected String titular;
    protected double saldo;

    public Conta_Bancaria(String titular, double saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    public void depositar(double valor){
        this.saldo =+ valor;
    }
    abstract public void sacar(double valor);
    abstract public void exibirInfo();
}
