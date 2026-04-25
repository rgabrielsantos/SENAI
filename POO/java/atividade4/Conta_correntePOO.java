package atividade4;

public class Conta_correntePOO {
    public static void main(){
        Conta_corrente contaCorrente = new Conta_corrente(12345678,"Gabriel Santos");
        System.out.println(contaCorrente);
        contaCorrente.depositar(500);
        System.out.println(contaCorrente);
        contaCorrente.sacar(50);
        System.out.println(contaCorrente+"\n");

        Conta_corrente novaConta = new Conta_corrente(54353934,"Ronaldo Nazario");
        System.out.println(novaConta);
        novaConta.sacar(50);
        novaConta.depositar(1000);
        System.out.println(novaConta);
        novaConta.sacar(400);
        System.out.println(novaConta);
    }
}
