package atividade4;
//Faça uma classe ContaInvestimento que seja semelhante a classe
//ContaCorrente, com a diferença de que se adicione um atributo taxaJuros.
//
//Forneça um método adicioneJuros() que adicioneJuros a conta.
//
//Em seguida, para testar a classe, escreva um programa que construa uma
//contaInvestimento com saldo inicial de 1000 reais e uma taxa de juros de
//10%.
//
//Depois aplique o método adicioneJuros() cinco vezes e mostre o saldo
//resultante.
public class Conta_investimento {
        private int numeroConta;
        private String nomeTitular;
        private double saldo = 1000;
        private double taxaJuros = 10;
        public Conta_investimento(int numeroConta, String nomeTitular){
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

        public void adicionarJuros(){
            this.saldo += ((this.saldo*this.taxaJuros)/100);
        }
        @Override
        public String toString(){
            return String.format("Titular: %s | Conta: %d | Saldo: R$%.2f",this.nomeTitular,this.numeroConta,this.saldo);
        }


}

