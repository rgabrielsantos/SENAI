package atividade2;
/*
* Crie uma classe Quadrado

A classe deve possuir o atributo lado do tipo inteiro

A classe deve possuir os métodos getLado, setLado e calcularArea

Faça o teste da classe
*/
public class Quadrado {
    private  int lado = 4;

    public int getLado(){
        return this.lado;
    }

    public int setLado(int lado){
        return this.lado = lado;
    }

    public int calcularArea(){
        return (this.lado * this.lado);
    }
}
