package atividade2;

public class QuadradoPOO {
    static void main(){
        Quadrado quadrado = new Quadrado();
        System.out.println("O lado atual é: "+quadrado.getLado());
        //System.out.println("O novo lado é: "+ quadrado.setLado(6));
        System.out.println("E a área do Quadrado é: "+quadrado.calcularArea());

    }
}
