package atividade3;
//Crie uma classe Funcionário
//
//A classe deve possuir os atributos nome do tipo String e salario do tipo
//double
//
//A classe deve possuir os métodos getNome e setSalario e aumentarSalario
//que recebe como parametro um percentualDeAumento
//
//Faça o teste da classe
public class Funcionario {

    private String nome = "Rogerinho";
    private double sal = 1700.0;

    public String getNome(){
        return this.nome;
    }


    public double getSal(){
        return this.sal;
    }
    public double setSal(double sal){
        return this.sal = sal;
    }

    public void aumentoSalario(double percentualDeaumento){
        this.sal += this.sal*(percentualDeaumento/100);
        System.out.println("Salario Atual após Aumento: "+this.sal);
    }
}
