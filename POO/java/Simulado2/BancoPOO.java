package Simulado2;
//3. Criar uma classe principal BancoPOO com um
// método main()
//Criar objetos das classes ContaCorrente e ContaPoupanca.
//Armazenar as contas em um array de
// ContaBancaria (polimorfismo).
//Simular operações de depósito, saque e exibição de
// informações para ambas as contas.
public class BancoPOO {
    public static void main (String[] args){

        Conta_Bancaria[] vetConta = new Conta_Bancaria[2];

        Conta_Corrente cc = new Conta_Corrente("Gabriel",0);
        Conta_Poupanca cp = new Conta_Poupanca("Joanes", 1000);
        vetConta[0] = cc;
        vetConta[1] = cp;


        System.out.println("\n=========Testando na conta corrente===========\n");
        cc.depositar(200);
        cc.exibirInfo();

        cc.sacar(700);
        cc.exibirInfo();
        System.out.println("\n=========Testando na conta poupança===========\n");
        cp.exibirInfo();
        cp.sacar(1001);
        cp.exibirInfo();
        cp.depositar(100);
        cp.exibirInfo();
    }
}
