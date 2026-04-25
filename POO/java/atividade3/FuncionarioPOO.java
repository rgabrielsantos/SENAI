package atividade3;

import java.util.Scanner;

public class FuncionarioPOO {
    static void main(String[] args){
        Scanner tc = new Scanner(System.in);
        double percentual;
        Funcionario f = new Funcionario();

        System.out.println("Funcionario: "+ f.getNome());
        System.out.println("Salário Antigo: "+f.getSal());

        f.setSal(2000);
        System.out.println("\nSalario Atual: "+f.getSal());

        System.out.println("Percentual de aumento: ");
        percentual = tc.nextDouble();

        f.aumentoSalario(percentual);

        //System.out.println("Apenas verificando o salario atual: "+ f.getSal());
    }
}
