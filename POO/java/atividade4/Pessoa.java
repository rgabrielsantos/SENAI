package atividade4;
// Crie uma classe Pessoa
//
//A classe deve possuir os atributos nome do tipo String, idade do tipo inteiro,
//peso e altura do tipo double.
//
//A classe deve possuir os métodos envelhecer(), engordar(peso),
//emagrecer(peso) e crescer(altura)
//
//OBS: Por padrão, a cada ano que a pessoa envelhece, ela deve crescer 0.5cm
//se a idade dela for menor que 21 anos,
//
//Faça o teste da classe
public class Pessoa {

    private String nome;
    private int idade;
    private double altura,peso;

    public Pessoa(String nome, int idade,double altura, double peso){
        this.nome = nome;
        this.altura = altura;
        this.idade = idade;
        this.peso = peso;
    }

    public void envelhecer(){
        this.idade++;
        if (this.idade < 21) {
            this.altura += 0.05;
        }


    }
    public void engordar(double peso){
        this.peso += peso;
    }
    public void emagrecer(double peso){
        this.peso -= peso;
    }
    public void crescer(double altura){this.altura += altura; }

    @Override
    public String toString(){
        return "\nNome: "+this.nome+"\nIdade: "+this.idade+"\nAltura: "+this.altura+"\nPeso: "+this.peso;
    }
}
