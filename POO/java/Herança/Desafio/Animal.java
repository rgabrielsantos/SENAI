package Herança.Desafio;
/*
Com base no diagrama apresentado, implemente as classes utilizando
Esta é a saida esperada no console do IntelliJ:
Nome: Rex
O animal está caminhando
O cachorro está latindo

Nome: Mimi
O animal está caminhando
O gato está miando
* */
public class Animal {
    protected String nome;
    protected String raca = "animal";

    public Animal(String nome){
        this.nome = nome;

    }

    public String getnome(){
        return this.nome;
    }
    public void Caminhar(){
        System.out.println("O "+this.raca+" está caminhando...");
    }
}
