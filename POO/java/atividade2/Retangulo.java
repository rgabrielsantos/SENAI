package atividade2;
/*
Crie uma classe Retangulo

A classe deve possuir os atributos base e altura do tipo inteiro

A classe deve possuir os métodos getBase, setBase, getAltura, setAltura,
calcularArea e calcularPerimetro

Faça o teste da classe
*/
public class Retangulo {
    private int base = 5, altura = 5;

    public int getBase(){
        return this.base;
    }

    public int getAltura(){
        return this.altura;
    }

    public int setBase(int base){
        return this.base = base;
    }


    public int setAltura(int altura){
        return this.altura = altura;
    }

    public void calcularArea(){
        int area = this.base*this.altura;
        System.out.println("A area do Retangulo é: "+area);

    }

    public void calcularPerimetro(){
        int perimetro = 2*(this.base+this.altura);
        System.out.println("O perimetro do Retangulo é: "+perimetro);

    }
}
