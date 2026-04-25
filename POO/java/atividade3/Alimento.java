package atividade3;
//Crie uma classe Alimento
//
//A classe deve possuir os atributos nome do tipo String e kcal do tipo double
//
//A classe deve possuir os métodos getNome, setNome, getKcal, setKcal e
//toString
//
//Faça o exemplo anterior com o estomago sendo um vetor do tipo Alimento
//ao invés do tipo String

public class Alimento {
    private String nome;
    private double kcal;

    public Alimento(String nome, double kcal){
        this.nome = nome;
        this.kcal = kcal;
    }
    public String getNome(){
        return this.nome;
    }
    public void setNome(String nome){
        this.nome = nome;
    }

    public double getKcal(){
        return this.kcal;
    }
    public void setKcal(double kcal){
        this.kcal = kcal;
    }
    @Override
    public String toString(){

        return "O alimento: "+this.nome+" tem "+this.kcal+"Kcal";
    }
}
