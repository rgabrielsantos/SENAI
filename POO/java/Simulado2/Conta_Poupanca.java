package Simulado2;
//ContaPoupanca:
//Não pode ficar com saldo negativo.
//Aplica um bônus de 0.5% sobre o saldo toda vez
// que for feito um depósito.
public class Conta_Poupanca extends Conta_Bancaria {

    public Conta_Poupanca(String titular, double saldo){
        super(titular,saldo);
    }
    @Override
    public void depositar(double valor){
    if(valor > 0){
        this.saldo += valor;
        this.saldo *= 1.005;
        System.out.println("Transação Concluida!");
    } else {
        System.out.println("Não é possivel realizar essa transação!");
    }
    }
    @Override
    public void sacar(double valor){
        if(valor > this.saldo){
            System.out.println("Valor Indisponivel!\nLimite execido");
            return;
        } else {
            this.saldo -= valor;
            System.out.println("\nTransação concluida!");
        }
    }
    @Override
    public void exibirInfo(){
        System.out.println("\n====Conta Poupança====\nTitular: "+this.titular+"\nSaldo atual: "+this.saldo);

    }
}
