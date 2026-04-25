package atividade3;

import java.util.List;
import java.util.ArrayList;

//Crie uma classe Macaco
//
//A classe deve possuir os atributos nome do tipo String e estomago do tipo
//List<String>
//
//A classe deve possuir os métodos comer(alimento), verEstomago(), digerir()
//
//Faça um programa criando dois macacos, alimentando-os com 3 alimentos
//diferentes e verificando o conteúdo do estomago a cada refeição.
//
//Experimente fazer com que um macaco se alimente do outro, é possível
//fazer um macaco canibal?
public class Macaco {

    private String nome;
    private List<String> estomago = new ArrayList<>();

    public Macaco(String nome) {
        this.nome = nome;
    }

    public void comer(String alimento) {
        this.estomago.add(alimento)
        ;
    }

    public void comer(Macaco macaco) {
        this.estomago.add("Macaco: " + macaco.nome);
        System.out.println("O Macaco " + this.nome + " comeu o " + macaco.nome + "!");
        macaco.estomago.clear();

    }

    public void digerir() {
        this.estomago.remove(0);
    }

    public void verEstomago() {
        if (this.estomago.isEmpty()) System.out.println("Estomago do macaco " + this.nome + ": está vazio!");
        else System.out.println("Estômago de " + this.nome + ":" + this.estomago);
    }

}

