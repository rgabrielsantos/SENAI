package atividade2;

public class BolaPOO {
    static void main() {
        Bola bola = new Bola();

        System.out.println("A cor inicial é: "+bola.getCor());
        System.out.println("A nova cor é: "+bola.setCor("Laranja"));
    }
}
