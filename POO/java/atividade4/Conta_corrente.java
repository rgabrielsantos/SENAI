package atividade4;
//Crie uma classe ContaCorrente
//
//A classe deve possuir os atributos numeroDaConta, nomeDoTitular, saldo
//
//A classe deve possuir os métodos depositar(valor) e sacar(valor)
//
//Obs: toda conta criada, tem saldo inicial 0
public class Conta_corrente {
    private int numeroConta;
    private String nomeTitular;
    private double saldo = 0;

    public Conta_corrente(int numeroConta, String nomeTitular){
        this.numeroConta = numeroConta;
        this.nomeTitular = nomeTitular;
    }

    public void depositar(double valor){
        this.saldo += valor;
        System.out.println("Deposito concluido com sucesso!");
    }
    public void sacar(double valor){
        if(valor > this.saldo){
            System.out.println("Saldo insuficiente!");
            return;
        }
        this.saldo -= valor;
        System.out.println("Saque concluido com sucesso!");
    }

    @Override
    public String toString(){
        return String.format("Titular: %s | Conta: %d | Saldo: R$%.2f",this.nomeTitular,this.numeroConta,this.saldo);
    }
}
