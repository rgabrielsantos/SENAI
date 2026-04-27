package Simulado2;
//2.
//ContaCorrente:
//Possui um limite especial de R$ 500.
//O saque pode ser realizado mesmo que o saldo fique
// negativo até esse limite.

public class Conta_Corrente extends Conta_Bancaria {
    private double limite = -500;

    public Conta_Corrente(String titular, double saldo){
        super(titular, saldo);
    }
    @Override
    public void depositar(double valor){
    if(valor > 0){
        this.saldo += valor;
        System.out.println("Transação Concluida!");
    } else {
        System.out.println("Não é possivel realizar essa transação!");
    }

    }
    @Override
    public void sacar(double valor){
        if((this.saldo - valor) < this.limite){
            System.out.println("Transação cancelada! Limite exedido.");
        } else {
            this.saldo -= valor;
            System.out.println("\nTransação concluida");
        }

    }
    @Override
    public void exibirInfo(){
        System.out.println("\n====Conta Corrente====\nTitular: "+this.titular+"\nSaldo atual: "+this.saldo);
    }
}
