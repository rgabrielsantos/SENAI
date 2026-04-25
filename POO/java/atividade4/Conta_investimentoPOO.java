package atividade4;

public class Conta_investimentoPOO {
    public static void main(String[] args){
        Conta_investimento contaInvestimento = new Conta_investimento(12345,"Gabriel Santos");

        System.out.println(contaInvestimento);
        contaInvestimento.adicionarJuros();
        contaInvestimento.adicionarJuros();
        contaInvestimento.adicionarJuros();
        contaInvestimento.adicionarJuros();
        contaInvestimento.adicionarJuros();
        System.out.println(contaInvestimento);
    }
}
